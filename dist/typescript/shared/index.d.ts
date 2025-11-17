/**
 * Shared Module - Common Types and Utilities
 */
export declare const SHARED_VERSION = "1.0.0";
export interface BaseConfig {
    name: string;
    version: string;
    environment: 'development' | 'production' | 'test';
}
export interface LoggerConfig {
    level: 'debug' | 'info' | 'warn' | 'error';
    format: 'json' | 'text';
}
export declare const defaultLoggerConfig: LoggerConfig;
//# sourceMappingURL=index.d.ts.map