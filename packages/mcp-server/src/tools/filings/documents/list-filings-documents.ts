// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@arb-inc/mcp/filtering';
import { Metadata, asTextContentResult } from '@arb-inc/mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ArbInc from '@arb-inc/node';

export const metadata: Metadata = {
  resource: 'filings.documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filings/documents/list',
  operationId: 'listFiledDocuments',
};

export const tool: Tool = {
  name: 'list_filings_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns filed documents for a specific case that the signed-in user participates in.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    documents: {\n      type: 'array',\n      description: 'List of filed documents for the case.',\n      items: {\n        type: 'object',\n        properties: {\n          approved: {\n            type: 'string',\n            description: 'Timestamp when the filing was approved (null if not approved).',\n            format: 'date-time'\n          },\n          approvedBy: {\n            type: 'string',\n            description: 'Identifier of the user who approved the filing (null if not approved).'\n          },\n          created: {\n            type: 'string',\n            description: 'Timestamp when the filing was created.',\n            format: 'date-time'\n          },\n          docketId: {\n            type: 'string',\n            description: 'Identifier linking the filing to a docket entry (null if not docketed).'\n          },\n          documentType: {\n            type: 'string',\n            description: 'Identifier of the type of document that was filed.'\n          },\n          filingID: {\n            type: 'string',\n            description: 'Unique identifier for the filing record.'\n          },\n          isSubmitted: {\n            type: 'boolean',\n            description: 'Indicates whether the filing has been submitted for review.'\n          },\n          organizationID: {\n            type: 'string',\n            description: 'Identifier of the organization the user belongs to (null if a personal account).'\n          },\n          phaseID: {\n            type: 'string',\n            description: 'Identifier of the phase this document was filed in.'\n          },\n          updated: {\n            type: 'string',\n            description: 'Timestamp when the filing was last updated.',\n            format: 'date-time'\n          },\n          userID: {\n            type: 'string',\n            description: 'Identifier of the user who filed the document.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'The case ID to list filed documents for.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.filings.documents.list(body)));
};

export default { metadata, tool, handler };
