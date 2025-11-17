// SPDX-License-Identifier: GPL-3.0-only
// Authentication and Authorization for OpenCode Unified
import { randomUUID } from 'node:crypto';
import { sign, verify } from 'jsonwebtoken';
import { promisify } from 'node:util';
const signAsync = promisify(sign);
/**
 * Authentication error types
 */
export class AuthenticationError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'AuthenticationError';
    }
}
export class AuthorizationError extends Error {
    code;
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = 'AuthorizationError';
    }
}
/**
 * Default authentication configuration
 */
export const DEFAULT_AUTH_CONFIG = {
    jwtSecret: process.env.JWT_SECRET || 'default-secret-change-in-production',
    jwtExpiresIn: '15m',
    refreshTokenExpiresIn: '7d',
    bcryptRounds: 12,
    maxSessionDuration: 24 * 60 * 60 * 1000, // 24 hours
    enableTokenRotation: true,
    strictMode: false,
};
/**
 * Authentication and Authorization Manager
 */
export class AuthManager {
    config;
    activeSessions = new Map();
    revokedTokens = new Set();
    sessionTokens = new Map(); // sessionId -> token mapping
    constructor(config = {}) {
        this.config = { ...DEFAULT_AUTH_CONFIG, ...config };
        if (this.config.jwtSecret === 'default-secret-change-in-production') {
            console.warn('⚠️  Using default JWT secret. Please set JWT_SECRET environment variable in production.');
        }
    }
    /**
     * Register a new agent
     */
    async registerAgent(agentInfo) {
        const agent = {
            ...agentInfo,
            id: randomUUID(),
            createdAt: Date.now(),
            lastActive: Date.now(),
        };
        this.activeSessions.set(agent.id, agent);
        return agent;
    }
    /**
     * Authenticate an agent and generate tokens
     */
    async authenticate(agentId, _credentials) {
        const agent = this.activeSessions.get(agentId);
        if (!agent) {
            throw new AuthenticationError('Agent not found', 'AGENT_NOT_FOUND');
        }
        // Update last active time
        agent.lastActive = Date.now();
        // Generate tokens
        const accessToken = await this.generateAccessToken(agent);
        const refreshToken = await this.generateRefreshToken(agent);
        // Store token mapping for session management
        if (agent.sessionId) {
            this.sessionTokens.set(agent.sessionId, accessToken);
        }
        return {
            agent,
            accessToken,
            refreshToken,
        };
    }
    /**
     * Validate and verify JWT token
     */
    async verifyToken(token) {
        try {
            // Check if token is revoked
            const decoded = verify(token, this.config.jwtSecret);
            if (this.revokedTokens.has(decoded.jti)) {
                throw new AuthenticationError('Token has been revoked', 'TOKEN_REVOKED');
            }
            // Check if agent still exists and is active
            const agent = this.activeSessions.get(decoded.sub);
            if (!agent) {
                throw new AuthenticationError('Agent not found', 'AGENT_NOT_FOUND');
            }
            // Check session duration
            const sessionAge = Date.now() - agent.createdAt;
            if (sessionAge > this.config.maxSessionDuration) {
                throw new AuthenticationError('Session expired', 'SESSION_EXPIRED');
            }
            return decoded;
        }
        catch (error) {
            if (error instanceof AuthenticationError) {
                throw error;
            }
            throw new AuthenticationError('Invalid token', 'INVALID_TOKEN');
        }
    }
    /**
     * Refresh access token using refresh token
     */
    async refreshToken(refreshToken) {
        try {
            const decoded = verify(refreshToken, this.config.jwtSecret);
            if (decoded.type !== 'refresh') {
                throw new AuthenticationError('Invalid refresh token', 'INVALID_TOKEN_TYPE');
            }
            if (this.revokedTokens.has(decoded.jti)) {
                throw new AuthenticationError('Refresh token has been revoked', 'TOKEN_REVOKED');
            }
            const agent = this.activeSessions.get(decoded.sub);
            if (!agent) {
                throw new AuthenticationError('Agent not found', 'AGENT_NOT_FOUND');
            }
            // Revoke old tokens if token rotation is enabled
            if (this.config.enableTokenRotation) {
                this.revokedTokens.add(decoded.jti);
            }
            // Generate new tokens
            const newAccessToken = await this.generateAccessToken(agent);
            const newRefreshToken = await this.generateRefreshToken(agent);
            return {
                accessToken: newAccessToken,
                refreshToken: newRefreshToken,
            };
        }
        catch (error) {
            if (error instanceof AuthenticationError) {
                throw error;
            }
            throw new AuthenticationError('Invalid refresh token', 'INVALID_REFRESH_TOKEN');
        }
    }
    /**
     * Logout agent and revoke tokens
     */
    async logout(agentId) {
        const agent = this.activeSessions.get(agentId);
        if (!agent) {
            return; // Already logged out or doesn't exist
        }
        // Revoke all tokens for this agent
        if (agent.sessionId) {
            const token = this.sessionTokens.get(agent.sessionId);
            if (token) {
                try {
                    const decoded = verify(token, this.config.jwtSecret);
                    this.revokedTokens.add(decoded.jti);
                }
                catch {
                    // Token might be invalid, ignore
                }
                this.sessionTokens.delete(agent.sessionId);
            }
        }
        // Remove agent from active sessions
        this.activeSessions.delete(agentId);
    }
    /**
     * Check if agent has permission
     */
    async checkPermission(agentId, permission) {
        const agent = this.activeSessions.get(agentId);
        if (!agent) {
            return false;
        }
        return agent.permissions.includes(permission) || agent.permissions.includes('*');
    }
    /**
     * Require agent to have permission (throws if not)
     */
    async requirePermission(agentId, permission) {
        const hasPermission = await this.checkPermission(agentId, permission);
        if (!hasPermission) {
            throw new AuthorizationError(`Agent ${agentId} does not have permission: ${permission}`, 'INSUFFICIENT_PERMISSIONS');
        }
    }
    /**
     * Check if agent can access resource
     */
    async canAccessResource(agentId, resource, action) {
        const agent = this.activeSessions.get(agentId);
        if (!agent) {
            return false;
        }
        // Check specific permission
        const specificPermission = `${resource}:${action}`;
        if (agent.permissions.includes(specificPermission)) {
            return true;
        }
        // Check wildcard permissions
        const resourceWildcard = `${resource}:*`;
        if (agent.permissions.includes(resourceWildcard)) {
            return true;
        }
        // Check global permissions
        if (agent.permissions.includes('*') || agent.permissions.includes(`${action}:*`)) {
            return true;
        }
        return false;
    }
    /**
     * Get agent information
     */
    getAgent(agentId) {
        return this.activeSessions.get(agentId) || null;
    }
    /**
     * Update agent information
     */
    updateAgent(agentId, updates) {
        const agent = this.activeSessions.get(agentId);
        if (!agent) {
            return null;
        }
        const updatedAgent = { ...agent, ...updates, lastActive: Date.now() };
        this.activeSessions.set(agentId, updatedAgent);
        return updatedAgent;
    }
    /**
     * Clean up expired sessions and revoked tokens
     */
    cleanup() {
        const now = Date.now();
        // Clean up expired sessions
        for (const [agentId, agent] of this.activeSessions.entries()) {
            const sessionAge = now - agent.createdAt;
            if (sessionAge > this.config.maxSessionDuration) {
                this.activeSessions.delete(agentId);
            }
        }
        // Clean up old revoked tokens (older than 24 hours)
        // In a production system, you'd want to store this in a more efficient way
        if (this.revokedTokens.size > 10000) {
            this.revokedTokens.clear();
        }
    }
    /**
     * Generate access token
     */
    async generateAccessToken(agent) {
        const payload = {
            sub: agent.id,
            type: 'access',
            permissions: agent.permissions,
            ...(agent.sessionId && { sessionId: agent.sessionId }),
        };
        return await signAsync(payload, this.config.jwtSecret, {
            expiresIn: this.config.jwtExpiresIn,
            jwtid: randomUUID(),
        });
    }
    /**
     * Generate refresh token
     */
    async generateRefreshToken(agent) {
        const payload = {
            sub: agent.id,
            type: 'refresh',
            permissions: agent.permissions,
            ...(agent.sessionId && { sessionId: agent.sessionId }),
        };
        return await signAsync(payload, this.config.jwtSecret, {
            expiresIn: this.config.refreshTokenExpiresIn,
            jwtid: randomUUID(),
        });
    }
    /**
     * Create middleware for Express/Fastify
     */
    createAuthMiddleware() {
        return async (request, reply) => {
            try {
                const authHeader = request.headers.authorization;
                if (!authHeader || !authHeader.startsWith('Bearer ')) {
                    throw new AuthenticationError('Missing or invalid authorization header', 'MISSING_AUTH_HEADER');
                }
                const token = authHeader.substring(7);
                const payload = await this.verifyToken(token);
                request.agent = this.getAgent(payload.sub);
                request.tokenPayload = payload;
                if (!request.agent) {
                    throw new AuthenticationError('Agent not found', 'AGENT_NOT_FOUND');
                }
            }
            catch (error) {
                reply.code(401).send({
                    error: 'Authentication failed',
                    message: error instanceof Error ? error.message : 'Unknown error',
                });
            }
        };
    }
    /**
     * Create permission middleware
     */
    createPermissionMiddleware(permission) {
        return async (request, reply) => {
            try {
                if (!request.agent) {
                    throw new AuthenticationError('Not authenticated', 'NOT_AUTHENTICATED');
                }
                await this.requirePermission(request.agent.id, permission);
            }
            catch (error) {
                reply.code(403).send({
                    error: 'Authorization failed',
                    message: error instanceof Error ? error.message : 'Unknown error',
                });
            }
        };
    }
}
/**
 * Default auth manager instance
 */
export const defaultAuthManager = new AuthManager();
/**
 * Convenience functions
 */
export async function authenticateAgent(agentId, credentials) {
    return await defaultAuthManager.authenticate(agentId, credentials);
}
export async function verifyAuthToken(token) {
    return await defaultAuthManager.verifyToken(token);
}
export async function checkAgentPermission(agentId, permission) {
    return await defaultAuthManager.checkPermission(agentId, permission);
}
export async function requireAgentPermission(agentId, permission) {
    return await defaultAuthManager.requirePermission(agentId, permission);
}
//# sourceMappingURL=auth.js.map