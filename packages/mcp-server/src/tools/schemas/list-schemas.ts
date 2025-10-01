// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@arb-inc/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@arb-inc/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ArbInc from '@arb-inc/node';

export const metadata: Metadata = {
  resource: 'schemas',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/schemas/list',
  operationId: 'listSchemas',
};

export const tool: Tool = {
  name: 'list_schemas',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRetrieves all available schemas for case phases and documents.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    documents: {\n      type: 'array',\n      description: 'All available document schemas.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique document identifier.'\n          },\n          description: {\n            type: 'string',\n            description: 'Brief explanation of the document.'\n          },\n          displayName: {\n            type: 'string',\n            description: 'Human-readable document name.'\n          },\n          sections: {\n            type: 'array',\n            description: 'Sections belonging to this document.',\n            items: {\n              type: 'object',\n              properties: {\n                description: {\n                  type: 'string',\n                  description: 'Brief explanation of the section.'\n                },\n                displayName: {\n                  type: 'string',\n                  description: 'Human-readable section name.'\n                },\n                fields: {\n                  type: 'array',\n                  description: 'Fillable fields in the section.',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string',\n                        description: 'Unique field identifier.'\n                      },\n                      displayName: {\n                        type: 'string',\n                        description: 'Human-readable field name.'\n                      },\n                      maxLength: {\n                        type: 'integer',\n                        description: 'Maximum allowed content length.'\n                      },\n                      minLength: {\n                        type: 'integer',\n                        description: 'Minimum required content length.'\n                      },\n                      required: {\n                        type: 'boolean',\n                        description: 'Whether this field is mandatory.'\n                      },\n                      sortOrder: {\n                        type: 'integer',\n                        description: 'Numeric order of this field within its parent section.'\n                      }\n                    }\n                  }\n                },\n                sortOrder: {\n                  type: 'integer',\n                  description: 'Numeric order of this section within its parent document.'\n                }\n              }\n            }\n          }\n        }\n      }\n    },\n    evidence: {\n      type: 'array',\n      description: 'All supported evidence types and their allowed MIME content types.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique evidence type identifier.'\n          },\n          contentTypes: {\n            type: 'array',\n            description: 'Allowed MIME content types for this evidence type.',\n            items: {\n              type: 'string'\n            }\n          },\n          displayName: {\n            type: 'string',\n            description: 'Human-readable evidence type name.'\n          }\n        }\n      }\n    },\n    parties: {\n      type: 'array',\n      description: 'All available parties.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique party identifier.'\n          },\n          description: {\n            type: 'string',\n            description: 'Brief explanation of the party.'\n          },\n          displayName: {\n            type: 'string',\n            description: 'Human-readable party name.'\n          }\n        }\n      }\n    },\n    phases: {\n      type: 'array',\n      description: 'All available case phases.',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'Unique phase identifier.'\n          },\n          description: {\n            type: 'string',\n            description: 'Brief explanation of the phase.'\n          },\n          displayName: {\n            type: 'string',\n            description: 'Human-readable phase name.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.schemas.list()));
};

export default { metadata, tool, handler };
