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
  httpPath: '/evidence/uploads/create',
  operationId: 'postEvidenceUploadsCreate',
};

export const tool: Tool = {
  name: 'create_evidence_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpload one file to a case with a short description.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    uploadID: {\n      type: 'string',\n      description: 'ID of the created evidence upload.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'ID of the case to attach the evidence to. Must be sent before the file part.',
      },
      description: {
        type: 'string',
        description: 'Short description of the evidence. Must be sent before the file part.',
      },
      file: {
        type: 'string',
        description: 'The evidence file to upload (single file only).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['caseID', 'description', 'file'],
  },
  annotations: {},
};

export const handler = async (client: ArbInc, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.evidence.uploads.create(body)));
};

export default { metadata, tool, handler };
