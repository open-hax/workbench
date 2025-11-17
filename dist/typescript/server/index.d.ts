/**
 * Server Module - HTTP Server and API Routes
 * Consolidated from @promethean-os/dualstore-http
 */
import { FastifyInstance } from 'fastify';
export declare const SERVER_VERSION = "1.0.0";
export interface ServerConfig {
    port: number;
    host: string;
    cors: boolean;
    swagger: boolean;
    auth?: {
        enabled: boolean;
        keys: string[];
    };
}
export declare const defaultServerConfig: ServerConfig;
export declare class OpenCodeServer {
    private fastify;
    private config;
    constructor(config?: Partial<ServerConfig>);
    initialize(): Promise<void>;
    start(): Promise<void>;
    stop(): Promise<void>;
    get instance(): FastifyInstance;
}
export declare function createServer(config?: Partial<ServerConfig>): OpenCodeServer;
export declare function startServer(config?: Partial<ServerConfig>): Promise<OpenCodeServer>;
//# sourceMappingURL=index.d.ts.map