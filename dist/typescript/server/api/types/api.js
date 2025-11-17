/**
 * Core API Types for Promethean Unified API System
 *
 * This file contains the fundamental type definitions that power the unified
 * API architecture across all Promethean services.
 */
/**
 * Type guard to check if response is successful
 */
export const isSuccess = (response) => response.success;
/**
 * Type guard to check if response is an error
 */
export const isError = (response) => !response.success;
//# sourceMappingURL=api.js.map