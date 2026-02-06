import { type PromptInjectionDetectorResult } from '../../../../../riatzukiza/promethean/packages/security/dist/testing/prompt-injection.js';
/**
 * Validation error types
 */
export declare class ValidationError extends Error {
    readonly field?: string | undefined;
    readonly code?: string | undefined;
    constructor(message: string, field?: string | undefined, code?: string | undefined);
}
/**
 * Security validation result
 */
export interface SecurityValidationResult {
    isValid: boolean;
    sanitizedValue?: string;
    warnings: string[];
    errors: ValidationError[];
    securityScore: number;
    promptInjection?: PromptInjectionDetectorResult;
}
/**
 * Input validation configuration
 */
export interface ValidationConfig {
    enablePromptInjectionDetection: boolean;
    maxPromptLength: number;
    maxMessageCount: number;
    allowedModelNames: string[];
    enableInputSanitization: boolean;
    strictMode: boolean;
}
/**
 * Default validation configuration
 */
export declare const DEFAULT_VALIDATION_CONFIG: ValidationConfig;
/**
 * Comprehensive input validator for OpenCode operations
 */
export declare class InputValidator {
    private promptInjectionDetector;
    private config;
    constructor(config?: Partial<ValidationConfig>);
    /**
     * Validate and sanitize a job submission
     */
    validateJobSubmission(jobData: any): Promise<SecurityValidationResult>;
    /**
     * Validate and sanitize prompt content
     */
    validatePrompt(prompt: string): Promise<SecurityValidationResult>;
    /**
     * Validate message array
     */
    validateMessages(messages: any[]): Promise<SecurityValidationResult>;
    /**
     * Validate input field
     */
    validateInput(input: string | string[]): Promise<SecurityValidationResult>;
    /**
     * Validate job options
     */
    validateOptions(options: any): SecurityValidationResult;
    /**
     * Sanitize input content
     */
    private sanitizeInput;
    /**
     * Check for suspicious patterns
     */
    private containsSuspiciousPatterns;
    /**
     * Validate agent ID format
     */
    validateAgentId(agentId: string): SecurityValidationResult;
    /**
     * Validate session ID format
     */
    validateSessionId(sessionId: string): SecurityValidationResult;
}
/**
 * Convenience function for quick validation
 */
export declare function validateJobSubmission(jobData: any, config?: Partial<ValidationConfig>): Promise<SecurityValidationResult>;
/**
 * Convenience function for quick prompt validation
 */
export declare function validatePrompt(prompt: string, config?: Partial<ValidationConfig>): Promise<SecurityValidationResult>;
//# sourceMappingURL=validation.d.ts.map