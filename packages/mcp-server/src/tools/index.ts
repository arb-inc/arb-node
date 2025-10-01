// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_cases from './cases/create-cases';
import list_cases from './cases/list-cases';
import view_cases from './cases/view-cases';
import create_evidence_uploads from './evidence/uploads/create-evidence-uploads';
import list_evidence_uploads from './evidence/uploads/list-evidence-uploads';
import delete_evidence_uploads from './evidence/uploads/delete-evidence-uploads';
import download_evidence_uploads from './evidence/uploads/download-evidence-uploads';
import create_filings_documents from './filings/documents/create-filings-documents';
import update_filings_documents from './filings/documents/update-filings-documents';
import list_filings_documents from './filings/documents/list-filings-documents';
import delete_filings_documents from './filings/documents/delete-filings-documents';
import pdf_filings_documents from './filings/documents/pdf-filings-documents';
import submit_filings_documents from './filings/documents/submit-filings-documents';
import view_filings_documents from './filings/documents/view-filings-documents';
import withdraw_filings_documents from './filings/documents/withdraw-filings-documents';
import list_schemas from './schemas/list-schemas';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_cases);
addEndpoint(list_cases);
addEndpoint(view_cases);
addEndpoint(create_evidence_uploads);
addEndpoint(list_evidence_uploads);
addEndpoint(delete_evidence_uploads);
addEndpoint(download_evidence_uploads);
addEndpoint(create_filings_documents);
addEndpoint(update_filings_documents);
addEndpoint(list_filings_documents);
addEndpoint(delete_filings_documents);
addEndpoint(pdf_filings_documents);
addEndpoint(submit_filings_documents);
addEndpoint(view_filings_documents);
addEndpoint(withdraw_filings_documents);
addEndpoint(list_schemas);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
