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
  httpPath: '/filings/documents/withdraw',
  operationId: 'withdrawFiledDocument',
};

export const tool: Tool = {
  name: 'withdraw_filings_documents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRemoves a filed document from a case if it hasn’t been docketed.\n\n# Response Schema\n```json\n{\n  type: 'string'\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      caseID: {
        type: 'string',
        description: 'The case identifier.',
      },
      filingID: {
        type: 'string',
        description: 'The filed document identifier.',
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
  return asTextContentResult(await maybeFilter(jq_filter, await client.filings.documents.withdraw(body)));
};

export default { metadata, tool, handler };
