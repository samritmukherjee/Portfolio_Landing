/**
 * WebMCP Types
 * Type definitions for Web Machine Context Protocol
 */

interface WebMCPInputSchema {
  type: 'object';
  properties: Record<string, any>;
  required?: string[];
}

interface WebMCPTool {
  name: string;
  description: string;
  inputSchema: WebMCPInputSchema;
  execute: (params: any) => any | Promise<any>;
}

interface WebMCPContext {
  name: string;
  tools: WebMCPTool[];
}

interface ModelContext {
  provideContext(context: WebMCPContext): void;
}

declare global {
  interface Navigator {
    modelContext?: ModelContext;
  }
}

export type {
  WebMCPInputSchema,
  WebMCPTool,
  WebMCPContext,
  ModelContext,
};
