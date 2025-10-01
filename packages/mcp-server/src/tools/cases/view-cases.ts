// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@arb-inc/mcp/filtering';
import { Metadata, asTextContentResult } from '@arb-inc/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ArbInc from '@arb-inc/node';

export const metadata: Metadata = {
  resource: 'cases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/cases/view',
  operationId: 'postCasesView',
};

export const tool: Tool = {
  name: 'view_cases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a simple snapshot of a case the user can access.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    overview: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Unique identifier for the case.'\n        },\n        canSubmitEvidence: {\n          type: 'boolean',\n          description: 'Whether parties can currently submit evidence.'\n        },\n        created: {\n          type: 'string',\n          description: 'When the case was created.',\n          format: 'date-time'\n        },\n        createdByOrgID: {\n          type: 'string',\n          description: 'ID of the organization that created the case, if any.'\n        },\n        createdByUserID: {\n          type: 'string',\n          description: 'ID of the user who created the case.'\n        },\n        phaseID: {\n          type: 'string',\n          description: 'Current phase identifier.'\n        },\n        title: {\n          type: 'string',\n          description: 'Human-friendly title for the case.'\n        },\n        updated: {\n          type: 'string',\n          description: 'When the case was last updated.',\n          format: 'date-time'\n        }\n      }\n    },\n    participants: {\n      type: 'array',\n      description: 'List of case participants.',\n      items: {\n        type: 'object',\n        properties: {\n          created: {\n            type: 'string',\n            description: 'When the participant was added.',\n            format: 'date-time'\n          },\n          isObserver: {\n            type: 'boolean',\n            description: 'Whether the participant is an observer.'\n          },\n          isPrimary: {\n            type: 'boolean',\n            description: 'Whether the participant is the primary representative.'\n          },\n          organizationID: {\n            type: 'string',\n            description: 'Organization ID of the participant, if any.'\n          },\n          partyID: {\n            type: 'string',\n            description: 'Role of the participant.'\n          },\n          userID: {\n            type: 'string',\n            description: 'ID of the participant user.'\n          }\n        }\n      }\n    },\n    partyID: {\n      type: 'string',\n      description: 'Users party in the case.'\n    },\n    timetable: {\n      type: 'object',\n      description: 'Case timetable details.',\n      properties: {\n        phases: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Phase identifier.'\n              },\n              documents: {\n                type: 'array',\n                description: 'Documents relevant to this phase.',\n                items: {\n                  type: 'object',\n                  properties: {\n                    id: {\n                      type: 'string',\n                      description: 'Document identifier.'\n                    },\n                    approvedBy: {\n                      type: 'string',\n                      description: 'Party who approves the document, if any.'\n                    },\n                    filedBy: {\n                      type: 'string',\n                      description: 'Party who files the document.'\n                    },\n                    maxAllowed: {\n                      type: 'integer',\n                      description: 'Maximum number of documents allowed.'\n                    },\n                    required: {\n                      type: 'boolean',\n                      description: 'Whether the document is required.'\n                    }\n                  }\n                }\n              },\n              filingDeadline: {\n                type: 'string',\n                description: 'Deadline for required filings in this phase.',\n                format: 'date-time'\n              },\n              scheduledEnd: {\n                type: 'string',\n                description: 'Scheduled end of the phase, if set.',\n                format: 'date-time'\n              },\n              scheduledStart: {\n                type: 'string',\n                description: 'Scheduled start of the phase.',\n                format: 'date-time'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'The identifier of the case to view.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['caseID'],
  },
  annotations: {},
};

export const handler = async (client: ArbInc, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.cases.view(body)));
};

export default { metadata, tool, handler };
