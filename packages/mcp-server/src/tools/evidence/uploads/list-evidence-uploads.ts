// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@arb-inc/node-mcp/filtering';
import { Metadata, asTextContentResult } from '@arb-inc/node-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import ArbInc from '@arb-inc/node';

export const metadata: Metadata = {
  resource: 'evidence.uploads',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/evidence/uploads/list',
  operationId: 'listEvidenceUploads',
};

export const tool: Tool = {
  name: 'list_evidence_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns the uploads the user is allowed to access for a given case.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    uploads: {\n      type: 'array',\n      description: 'List of evidence uploads visible to the user.',\n      items: {\n        type: 'object',\n        properties: {\n          categoryID: {\n            type: 'string',\n            description: 'Evidence category classification.'\n          },\n          contentType: {\n            type: 'string',\n            description: 'MIME type of the uploaded file.'\n          },\n          created: {\n            type: 'string',\n            description: 'When the evidence was submitted (RFC 3339).',\n            format: 'date-time'\n          },\n          description: {\n            type: 'string',\n            description: 'Text description of the evidence.'\n          },\n          organizationID: {\n            type: 'string',\n            description: 'Organization the user belongs to, if any.'\n          },\n          partyID: {\n            type: 'string',\n            description: 'Party linked to the evidence.'\n          },\n          phaseID: {\n            type: 'string',\n            description: 'Case phase at submission.'\n          },\n          uploadID: {\n            type: 'string',\n            description: 'Unique identifier for the upload.'\n          },\n          userID: {\n            type: 'string',\n            description: 'User who submitted the evidence.'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'The case identifier to look up uploads for.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.evidence.uploads.list(body)));
};

export default { metadata, tool, handler };
