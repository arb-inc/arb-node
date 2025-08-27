// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Documents extends APIResource {
  /**
   * Files a document into a case for a user.
   *
   * @example
   * ```ts
   * const response = await client.filings.documents.upload({
   *   caseID: '2025-08-00125',
   *   documentID: 'statementOfClaim',
   *   userID: '9e1c7c02-4b65-43b0-9ad7-2a62b542e2f1',
   * });
   * ```
   */
  upload(body: DocumentUploadParams, options?: RequestOptions): APIPromise<DocumentUploadResponse> {
    return this._client.post('/filings/documents/create', { body, ...options });
  }
}

export interface DocumentUploadResponse {
  /**
   * Identifier for the filed document.
   */
  filingID?: string;
}

export interface DocumentUploadParams {
  /**
   * Identifier of the case the filing is for.
   */
  caseID: string;

  /**
   * Identifier of the document type being filed.
   */
  documentID: string;

  /**
   * UUID of the user filing the document.
   */
  userID: string;

  /**
   * Key-value pairs of field IDs and their input values.
   */
  fields?: { [key: string]: string };
}

export declare namespace Documents {
  export {
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
