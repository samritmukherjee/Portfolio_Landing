/**
 * WebMCP (Web Machine Context Protocol) Hook
 * Enables AI agents to interact with portfolio through the browser
 * Reference: https://webmachinelearning.github.io/webmcp/
 */

import type { WebMCPTool } from '@/types/webmcp';

export function useWebMCP() {
  if (typeof window === 'undefined') {
    return null;
  }

  // Check if WebMCP is available
  if (!window.navigator.modelContext) {
    console.warn('WebMCP not available in this browser');
    return null;
  }

  const providePortfolioTools = () => {
    const tools: WebMCPTool[] = [
      {
        name: 'navigate_section',
        description: 'Navigate to a specific portfolio section',
        inputSchema: {
          type: 'object',
          properties: {
            section: {
              type: 'string',
              enum: [
                'about',
                'experience',
                'projects',
                'skills',
                'hackathons',
                'resume',
                'contact',
              ],
              description: 'The section to navigate to',
            },
          },
          required: ['section'],
        },
        execute: (params: { section: string }) => {
          const element = document.getElementById(params.section);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            return { success: true, message: `Navigated to ${params.section}` };
          }
          return { success: false, message: `Section ${params.section} not found` };
        },
      },
      {
        name: 'get_project_details',
        description: 'Get detailed information about projects',
        inputSchema: {
          type: 'object',
          properties: {
            projectId: {
              type: 'string',
              description: 'Project identifier (cosmic-canvas, sukalya-ai, portfolio-os)',
            },
          },
          required: ['projectId'],
        },
        execute: async (params: { projectId: string }) => {
          try {
            const response = await fetch('/api/projects');
            const projects = await response.json();
            const project = projects.find((p: any) => p.id === params.projectId);
            return project || { error: 'Project not found' };
          } catch (error) {
            return { error: 'Failed to fetch projects' };
          }
        },
      },
      {
        name: 'get_contact_info',
        description: 'Get contact information',
        inputSchema: {
          type: 'object',
          properties: {},
        },
        execute: async () => {
          try {
            const response = await fetch('/api/contact');
            return await response.json();
          } catch (error) {
            return { error: 'Failed to fetch contact info' };
          }
        },
      },
      {
        name: 'read_resume',
        description: 'Access resume and experience information',
        inputSchema: {
          type: 'object',
          properties: {
            format: {
              type: 'string',
              enum: ['json', 'markdown'],
              description: 'Response format',
            },
          },
        },
        execute: () => {
          const resumeLink = document.querySelector(
            'a[href*="drive.google.com"]'
          ) as HTMLAnchorElement;
          return {
            resumeUrl: resumeLink?.href || 'Not found',
            message: 'Resume available at /api/resume endpoint',
          };
        },
      },
    ];

    try {
      window.navigator.modelContext!.provideContext({
        name: 'Portfolio Tools',
        tools,
      });
      console.log('✓ Portfolio WebMCP tools registered');
      return true;
    } catch (error) {
      console.error('Failed to register WebMCP tools:', error);
      return false;
    }
  };

  return {
    providePortfolioTools,
    isAvailable: true,
  };
}

// Hook for components to use
export function initializeWebMCP() {
  if (typeof window === 'undefined') return;

  const webmcp = useWebMCP();
  if (webmcp?.isAvailable) {
    webmcp.providePortfolioTools();
  }
}
