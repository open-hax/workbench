/**
 * Schemas Module - Shared Type Definitions and Schemas
 */
export declare const SCHEMAS_VERSION = "1.0.0";
export interface BaseSchema {
    id: string;
    type: string;
    version: string;
    created: Date;
    updated: Date;
}
export interface ConfigSchema extends BaseSchema {
    name: string;
    description: string;
    properties: Record<string, any>;
}
//# sourceMappingURL=index.d.ts.map