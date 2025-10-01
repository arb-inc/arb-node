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
  httpPath: '/evidence/uploads/download',
  operationId: 'getEvidenceUploadDownloadUrl',
};

export const tool: Tool = {
  name: 'download_evidence_uploads',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReturns a short-lived URL so you can download the upload.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    url: {\n      type: 'string',\n      description: 'Time-limited URL for downloading the file.'\n    },\n    validForSeconds: {\n      type: 'integer',\n      description: 'How long the URL is valid, in seconds.'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'The case identifier.',
      },
      uploadID: {
        type: 'string',
        description: 'The upload identifier for which to generate a download URL.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['caseID', 'uploadID'],
  },
  annotations: {},
};

export const handler = async (client: ArbInc, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.evidence.uploads.download(body)));
};

export default { metadata, tool, handler };
