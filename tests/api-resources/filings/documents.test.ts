// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ArbInc from '@arb-inc/node';

const client = new ArbInc({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  // Prism tests are disabled
  test.skip('upload: only required params', async () => {
    const responsePromise = client.filings.documents.upload({
      caseID: '2025-08-00125',
      documentID: 'statementOfClaim',
      userID: '9e1c7c02-4b65-43b0-9ad7-2a62b542e2f1',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('upload: required and optional params', async () => {
    const response = await client.filings.documents.upload({
      caseID: '2025-08-00125',
      documentID: 'statementOfClaim',
      userID: '9e1c7c02-4b65-43b0-9ad7-2a62b542e2f1',
      fields: { claimantName: 'Mike Smith', claimantAddress: '123 Main Street' },
    });
  });
});
