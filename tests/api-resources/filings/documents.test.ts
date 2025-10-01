// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ArbInc from '@arb-inc/node';

const client = new ArbInc({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource documents', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.filings.documents.create({
      caseID: '2025-08-00125',
      documentID: 'statementOfClaim',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.filings.documents.create({
      caseID: '2025-08-00125',
      documentID: 'statementOfClaim',
      fields: { respondentName: 'Mike Smith', respondentAddress: '123 Main Street' },
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.filings.documents.update({
      caseID: '2025-08-00125',
      fields: {
        title: 'Amended Motion to Dismiss',
        description: 'Updated summary after review',
        docketNumber: '2025-00123',
      },
      filingID: '14',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.filings.documents.update({
      caseID: '2025-08-00125',
      fields: {
        title: 'Amended Motion to Dismiss',
        description: 'Updated summary after review',
        docketNumber: '2025-00123',
      },
      filingID: '14',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.filings.documents.list({ caseID: '4f9b1d9e-0e7a-4b4d-9f0e-5f5f2b7d8a33' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.filings.documents.list({ caseID: '4f9b1d9e-0e7a-4b4d-9f0e-5f5f2b7d8a33' });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.filings.documents.delete({ caseID: '2025-08-00251', filingID: '3' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('delete: required and optional params', async () => {
    const response = await client.filings.documents.delete({ caseID: '2025-08-00251', filingID: '3' });
  });

  // Prism tests are disabled
  test.skip('pdf: only required params', async () => {
    const responsePromise = client.filings.documents.pdf({ caseID: '2025-08-00123', filingID: '2' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('pdf: required and optional params', async () => {
    const response = await client.filings.documents.pdf({ caseID: '2025-08-00123', filingID: '2' });
  });

  // Prism tests are disabled
  test.skip('submit: only required params', async () => {
    const responsePromise = client.filings.documents.submit({ caseID: '2025-08-00125', filingID: '8' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('submit: required and optional params', async () => {
    const response = await client.filings.documents.submit({ caseID: '2025-08-00125', filingID: '8' });
  });

  // Prism tests are disabled
  test.skip('view: only required params', async () => {
    const responsePromise = client.filings.documents.view({ caseID: '2025-08-00225', filingID: '15' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('view: required and optional params', async () => {
    const response = await client.filings.documents.view({ caseID: '2025-08-00225', filingID: '15' });
  });

  // Prism tests are disabled
  test.skip('withdraw: only required params', async () => {
    const responsePromise = client.filings.documents.withdraw({ caseID: '2025-08-00124', filingID: '15' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('withdraw: required and optional params', async () => {
    const response = await client.filings.documents.withdraw({ caseID: '2025-08-00124', filingID: '15' });
  });
});
