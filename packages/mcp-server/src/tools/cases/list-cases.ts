// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@arb-inc/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@arb-inc/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ArbInc from '@arb-inc/node';

export const metadata: Metadata = {
  resource: 'cases',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/cases/list',
  operationId: 'listCases',
};

export const tool: Tool = {
  name: 'list_cases',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the user's active cases with simple pagination via a cursor.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    cases: {\n      type: 'array',\n      description: 'List of active cases for the user.',\n      items: {\n        type: 'object',\n        properties: {\n          overview: {\n            type: 'object',\n            description: 'Summary information about the case.',\n            properties: {\n              id: {\n                type: 'string',\n                description: 'Unique identifier for the case.'\n              },\n              created: {\n                type: 'string',\n                description: 'When the case was created.',\n                format: 'date-time'\n              },\n              createdByOrgID: {\n                type: 'string',\n                description: 'Organization ID that created the case, if any.'\n              },\n              createdByUserID: {\n                type: 'string',\n                description: 'ID of the user who created the case.'\n              },\n              phaseID: {\n                type: 'string',\n                description: 'Current phase identifier.'\n              },\n              title: {\n                type: 'string',\n                description: 'Human-readable title for the case.'\n              },\n              updated: {\n                type: 'string',\n                description: 'When the case was last updated.',\n                format: 'date-time'\n              }\n            }\n          },\n          participants: {\n            type: 'array',\n            description: 'People or entities involved in the case.',\n            items: {\n              type: 'object',\n              properties: {\n                created: {\n                  type: 'string',\n                  description: 'When the participant was added.',\n                  format: 'date-time'\n                },\n                isObserver: {\n                  type: 'boolean',\n                  description: 'Whether this participant is an observer.'\n                },\n                isPrimary: {\n                  type: 'boolean',\n                  description: 'Whether this participant is the primary representative.'\n                },\n                organizationID: {\n                  type: 'string',\n                  description: 'Organization ID tied to the participant.'\n                },\n                partyID: {\n                  type: 'string',\n                  description: 'Participant party role.'\n                },\n                userID: {\n                  type: 'string',\n                  description: 'ID of the participant user.'\n                }\n              }\n            }\n          },\n          partyID: {\n            type: 'string',\n            description: 'Users party in the case.'\n          }\n        }\n      }\n    },\n    cursor: {\n      type: 'string',\n      description: 'Cursor for fetching the next page (created time of the last case).',\n      format: 'date-time'\n    },\n    moreCases: {\n      type: 'boolean',\n      description: 'Indicates if more cases are available to fetch.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      cursor: {
        type: 'string',
        description: 'Return cases created after this timestamp.',
        format: 'date-time',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {},
};

export const handler = async (client: ArbInc, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.cases.list(body)));
};

export default { metadata, tool, handler };
