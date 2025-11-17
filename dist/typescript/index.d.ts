/**
 * Promethean OpenCode Unified Package
 *
 * This is the main entry point for the unified OpenCode package that combines:
 * - TypeScript HTTP server (from dualstore-http)
 * - TypeScript client library (from opencode-client)
 * - ClojureScript editor (from opencode-cljs-electron)
 * - Electron integration
 */
export * from './server/index.js';
export * from './client/index.js';
export * from './shared/index.js';
export * from './electron/index.js';
export * from '../schemas/index.js';
export declare const VERSION = "1.0.0";
export declare const PACKAGE_INFO: {
    readonly name: "@promethean-os/opencode-unified";
    readonly version: "1.0.0";
    readonly description: "Unified OpenCode client combining TypeScript server, ClojureScript editor, and Electron integration";
    readonly author: "Promethean Team";
    readonly license: "GPL-3.0-only";
};
declare const _default: {
    VERSION: string;
    PACKAGE_INFO: {
        readonly name: "@promethean-os/opencode-unified";
        readonly version: "1.0.0";
        readonly description: "Unified OpenCode client combining TypeScript server, ClojureScript editor, and Electron integration";
        readonly author: "Promethean Team";
        readonly license: "GPL-3.0-only";
    };
};
export default _default;
//# sourceMappingURL=index.d.ts.map