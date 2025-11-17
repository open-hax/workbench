/**
 * Authentication error types
 */
export declare class AuthenticationError extends Error {
    readonly code?: string | undefined;
    constructor(message: string, code?: string | undefined);
}
export declare class AuthorizationError extends Error {
    readonly code?: string | undefined;
    constructor(message: string, code?: string | undefined);
}
/**
 * User/Agent information
 */
export interface AgentInfo {
    id: string;
    type: 'human' | 'ai' | 'system';
    permissions: string[];
    sessionId?: string;
    createdAt: number;
    lastActive: number;
    metadata?: Record<string, any>;
}
/**
 * JWT Token payload
 */
export interface TokenPayload {
    sub: string;
    type: 'access' | 'refresh';
    permissions: string[];
    sessionId?: string;
    iat: number;
    exp: number;
    jti: string;
}
/**
 * Authentication configuration
 */
export interface AuthConfig {
    jwtSecret: string;
    jwtExpiresIn: string;
    refreshTokenExpiresIn: string;
    bcryptRounds: number;
    maxSessionDuration: number;
    enableTokenRotation: boolean;
    strictMode: boolean;
}
/**
 * Default authentication configuration
 */
export declare const DEFAULT_AUTH_CONFIG: AuthConfig;
/**
 * Authentication and Authorization Manager
 */
export declare class AuthManager {
    private config;
    private activeSessions;
    private revokedTokens;
    private sessionTokens;
    constructor(config?: Partial<AuthConfig>);
    /**
     * Register a new agent
     */
    registerAgent(agentInfo: Omit<AgentInfo, 'id' | 'createdAt' | 'lastActive'>): Promise<AgentInfo>;
    /**
     * Authenticate an agent and generate tokens
     */
    authenticate(agentId: string, _credentials?: any): Promise<{
        agent: AgentInfo;
        accessToken: string;
        refreshToken: string;
    }>;
    /**
     * Validate and verify JWT token
     */
    verifyToken(token: string): Promise<TokenPayload>;
    /**
     * Refresh access token using refresh token
     */
    refreshToken(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    /**
     * Logout agent and revoke tokens
     */
    logout(agentId: string): Promise<void>;
    /**
     * Check if agent has permission
     */
    checkPermission(agentId: string, permission: string): Promise<boolean>;
    /**
     * Require agent to have permission (throws if not)
     */
    requirePermission(agentId: string, permission: string): Promise<void>;
    /**
     * Check if agent can access resource
     */
    canAccessResource(agentId: string, resource: string, action: string): Promise<boolean>;
    /**
     * Get agent information
     */
    getAgent(agentId: string): AgentInfo | null;
    /**
     * Update agent information
     */
    updateAgent(agentId: string, updates: Partial<AgentInfo>): AgentInfo | null;
    /**
     * Clean up expired sessions and revoked tokens
     */
    cleanup(): void;
    /**
     * Generate access token
     */
    private generateAccessToken;
    /**
     * Generate refresh token
     */
    private generateRefreshToken;
    /**
     * Create middleware for Express/Fastify
     */
    createAuthMiddleware(): (request: any, reply: any) => Promise<void>;
    /**
     * Create permission middleware
     */
    createPermissionMiddleware(permission: string): (request: any, reply: any) => Promise<void>;
}
/**
 * Default auth manager instance
 */
export declare const defaultAuthManager: AuthManager;
/**
 * Convenience functions
 */
export declare function authenticateAgent(agentId: string, credentials?: any): Promise<{
    agent: AgentInfo;
    accessToken: string;
    refreshToken: string;
}>;
export declare function verifyAuthToken(token: string): Promise<TokenPayload>;
export declare function checkAgentPermission(agentId: string, permission: string): Promise<boolean>;
export declare function requireAgentPermission(agentId: string, permission: string): Promise<void>;
//# sourceMappingURL=auth.d.ts.map