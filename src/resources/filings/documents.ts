// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Documents extends APIResource {
  /**
   * Creates a new document for a case using a document template.
   *
   * @example
   * ```ts
   * const response = await client.filings.documents.upload({
   *   caseID: '2025-08-00125',
   *   documentID: 'statementOfClaim',
   * });
   * ```
   */
  upload(body: DocumentUploadParams, options?: RequestOptions): APIPromise<DocumentUploadResponse> {
    return this._client.post('/filings/documents/create', { body, ...options });
  }
}

export interface DocumentUploadResponse {
  /**
   * ID of the created filing.
   */
  filingID?: string;
}

export interface DocumentUploadParams {
  /**
   * ID of the case to file into.
   */
  caseID: string;

  /**
   * Identifier of the document type/template.
   */
  documentID: string;

  /**
   * Key-value field inputs for the document.
   */
  fields?: { [key: string]: string };
}

export declare namespace Documents {
  export {
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
