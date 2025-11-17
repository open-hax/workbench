/**
 * Client Module - OpenCode Client Library
 * Consolidated from @promethean-os/opencode-client
 */
export declare const CLIENT_VERSION = "1.0.0";
export interface ClientConfig {
    endpoint: string;
    timeout: number;
    retries: number;
}
export declare const defaultClientConfig: ClientConfig;
export declare class OpenCodeClient {
    private config;
    constructor(config?: Partial<ClientConfig>);
    healthCheck(): Promise<any>;
    getInfo(): Promise<any>;
    get endpoint(): string;
}
export declare function createClient(config?: Partial<ClientConfig>): OpenCodeClient;
//# sourceMappingURL=index.d.ts.map