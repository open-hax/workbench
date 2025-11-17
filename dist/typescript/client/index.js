/**
 * Client Module - OpenCode Client Library
 * Consolidated from @promethean-os/opencode-client
 */
export const CLIENT_VERSION = '1.0.0';
export const defaultClientConfig = {
    endpoint: 'http://localhost:3000',
    timeout: 30000,
    retries: 3,
};
export class OpenCodeClient {
    config;
    constructor(config = {}) {
        this.config = { ...defaultClientConfig, ...config };
    }
    async healthCheck() {
        const response = await fetch(`${this.config.endpoint}/health`, {
            method: 'GET',
            signal: AbortSignal.timeout(this.config.timeout),
        });
        if (!response.ok) {
            throw new Error(`Health check failed: ${response.statusText}`);
        }
        return response.json();
    }
    async getInfo() {
        const response = await fetch(`${this.config.endpoint}/api/info`, {
            method: 'GET',
            signal: AbortSignal.timeout(this.config.timeout),
        });
        if (!response.ok) {
            throw new Error(`Failed to get info: ${response.statusText}`);
        }
        return response.json();
    }
    get endpoint() {
        return this.config.endpoint;
    }
}
// Client factory function
export function createClient(config) {
    return new OpenCodeClient(config);
}
//# sourceMappingURL=index.js.map