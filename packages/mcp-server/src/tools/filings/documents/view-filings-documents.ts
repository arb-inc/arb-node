// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@arb-inc/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@arb-inc/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ArbInc from '@arb-inc/node';

export const metadata: Metadata = {
  resource: 'filings.documents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/filings/documents/view',
  operationId: 'postFilingsDocumentsView',
};

export const tool: Tool = {
  name: 'view_filings_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the details of a filed document for a given case and filing.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    document: {\n      type: 'object',\n      properties: {\n        approved: {\n          type: 'string',\n          description: 'When the filing was approved, if approved.',\n          format: 'date-time'\n        },\n        approvedBy: {\n          type: 'string',\n          description: 'User ID of the approver, if approved.'\n        },\n        caseID: {\n          type: 'string',\n          description: 'Case ID the filing belongs to.'\n        },\n        created: {\n          type: 'string',\n          description: 'When the filing was created.',\n          format: 'date-time'\n        },\n        docketId: {\n          type: 'string',\n          description: 'Docket entry ID, if docketed.'\n        },\n        documentId: {\n          type: 'string',\n          description: 'Type identifier of the filed document.'\n        },\n        fields: {\n          type: 'object',\n          description: 'Map of field IDs to their text content.',\n          additionalProperties: true\n        },\n        filingID: {\n          type: 'string',\n          description: 'Unique filing record ID.'\n        },\n        isSubmitted: {\n          type: 'boolean',\n          description: 'Whether the filing was submitted for review.'\n        },\n        organizationID: {\n          type: 'string',\n          description: 'Organization ID of the user, if any.'\n        },\n        partyID: {\n          type: 'string',\n          description: 'Party on whose behalf the document was filed.'\n        },\n        phaseID: {\n          type: 'string',\n          description: 'Phase in which the document was filed.'\n        },\n        updated: {\n          type: 'string',\n          description: 'When the filing was last updated.',\n          format: 'date-time'\n        },\n        userID: {\n          type: 'string',\n          description: 'User who filed the document.'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'The case identifier.',
      },
      filingID: {
        type: 'string',
        description: 'The filing identifier.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['caseID', 'filingID'],
  },
  annotations: {},
};

export const handler = async (client: ArbInc, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.filings.documents.view(body)));
};

export default { metadata, tool, handler };
