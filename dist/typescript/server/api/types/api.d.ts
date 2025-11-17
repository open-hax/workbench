/**
 * Core API Types for Promethean Unified API System
 *
 * This file contains the fundamental type definitions that power the unified
 * API architecture across all Promethean services.
 */
/**
 * Base API response wrapper for successful responses
 */
export type ApiResponse<T> = {
    readonly success: true;
    readonly data: T;
    readonly meta: {
        readonly timestamp: string;
        readonly requestId: string;
        readonly version: string;
        readonly pagination?: PaginationMeta;
        readonly rateLimit?: RateLimitMeta;
    };
};
/**
 * Base API response wrapper for error responses
 */
export type ApiError = {
    readonly success: false;
    readonly error: {
        readonly code: string;
        readonly message: string;
        readonly details?: unknown;
        readonly stack?: string;
    };
    readonly meta: {
        readonly timestamp: string;
        readonly requestId: string;
        readonly version: string;
    };
};
/**
 * Pagination metadata for list responses
 */
export type PaginationMeta = {
    readonly page: number;
    readonly limit: number;
    readonly total: number;
    readonly totalPages: number;
    readonly hasNext: boolean;
    readonly hasPrev: boolean;
};
/**
 * Rate limiting metadata
 */
export type RateLimitMeta = {
    readonly limit: number;
    readonly remaining: number;
    readonly reset: number;
    readonly retryAfter?: number;
};
/**
 * Request context passed through middleware chain
 */
export type RequestContext = {
    readonly requestId: string;
    readonly userId?: string;
    readonly userAgent?: string;
    readonly ip?: string;
    readonly timestamp: number;
    readonly version: string;
    readonly method: string;
    readonly path: string;
};
/**
 * Health check response structure
 */
export type HealthCheck = {
    readonly status: 'healthy' | 'degraded' | 'unhealthy';
    readonly timestamp: string;
    readonly version: string;
    readonly checks: {
        readonly database: HealthCheckResult;
        readonly externalServices: HealthCheckResult;
        readonly memory: HealthCheckResult;
        readonly disk: HealthCheckResult;
    };
};
/**
 * Individual health check result
 */
export type HealthCheckResult = {
    readonly status: 'pass' | 'fail' | 'warn';
    readonly message?: string;
    readonly duration?: number;
    readonly details?: Record<string, unknown>;
};
/**
 * Request metrics for monitoring
 */
export type RequestMetrics = {
    readonly method: string;
    readonly path: string;
    readonly statusCode: number;
    readonly responseTime: number;
    readonly userAgent?: string;
    readonly userId?: string;
    readonly requestId: string;
    readonly timestamp: number;
};
/**
 * Error report for tracking and debugging
 */
export type ErrorReport = {
    readonly error: {
        readonly code: string;
        readonly message: string;
        readonly stack?: string;
    };
    readonly request: {
        readonly method: string;
        readonly path: string;
        readonly headers: Record<string, string>;
        readonly body?: unknown;
    };
    readonly user?: {
        readonly id: string;
        readonly role: string;
    };
    readonly context: {
        readonly timestamp: string;
        readonly requestId: string;
        readonly version: string;
    };
};
/**
 * JWT token payload structure
 */
export type JwtPayload = {
    readonly sub: string;
    readonly iat: number;
    readonly exp: number;
    readonly scope: readonly string[];
    readonly role: string;
};
/**
 * API version information
 */
export type ApiVersion = {
    readonly version: string;
    readonly status: 'current' | 'previous' | 'deprecated' | 'beta';
    readonly deprecationDate?: string;
    readonly sunsetDate?: string;
    readonly migrationGuide?: string;
};
/**
 * Cache configuration for endpoints
 */
export type CacheConfig = {
    readonly ttl: number;
    readonly varyBy?: readonly string[];
    readonly tags?: readonly string[];
};
/**
 * Rate limit configuration
 */
export type RateLimitConfig = {
    readonly requests: number;
    readonly window: number;
    readonly burst?: number;
    readonly skipSuccessfulRequests?: boolean;
    readonly skipFailedRequests?: boolean;
};
/**
 * Middleware configuration
 */
export type MiddlewareConfig = {
    readonly cors?: {
        readonly origin: string | readonly string[];
        readonly credentials?: boolean;
        readonly methods?: readonly string[];
        readonly headers?: readonly string[];
    };
    readonly rateLimit?: RateLimitConfig;
    readonly security?: {
        readonly headers?: Record<string, string>;
        readonly csrf?: boolean;
        readonly hsts?: boolean;
    };
};
/**
 * API endpoint configuration
 */
export type EndpointConfig = {
    readonly path: string;
    readonly method: string;
    readonly version: string;
    readonly auth?: boolean;
    readonly rateLimit?: RateLimitConfig;
    readonly cache?: CacheConfig;
    readonly validation?: {
        readonly body?: string;
        readonly query?: string;
        readonly params?: string;
    };
};
/**
 * Union type for all possible API responses
 */
export type ApiResult<T = unknown> = ApiResponse<T> | ApiError;
/**
 * Type guard to check if response is successful
 */
export declare const isSuccess: <T>(response: ApiResult<T>) => response is ApiResponse<T>;
/**
 * Type guard to check if response is an error
 */
export declare const isError: <T>(response: ApiResult<T>) => response is ApiError;
//# sourceMappingURL=api.d.ts.map