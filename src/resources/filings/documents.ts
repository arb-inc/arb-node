// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';

export class Documents extends APIResource {
  /**
   * Creates a new document for a case using a document template.
   *
   * @example
   * ```ts
   * const document = await client.filings.documents.create({
   *   caseID: '2025-08-00125',
   *   documentID: 'statementOfClaim',
   * });
   * ```
   */
  create(body: DocumentCreateParams, options?: RequestOptions): APIPromise<DocumentCreateResponse> {
    return this._client.post('/filings/documents/create', { body, ...options });
  }

  /**
   * Updates a document in a case with new field values.
   *
   * @example
   * ```ts
   * const document = await client.filings.documents.update({
   *   caseID: '2025-08-00125',
   *   fields: {
   *     title: 'Amended Motion to Dismiss',
   *     description: 'Updated summary after review',
   *     docketNumber: '2025-00123',
   *   },
   *   filingID: '14',
   * });
   * ```
   */
  update(body: DocumentUpdateParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/filings/documents/update', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Returns filed documents for a specific case that the signed-in user participates
   * in.
   *
   * @example
   * ```ts
   * const documents = await client.filings.documents.list({
   *   caseID: '4f9b1d9e-0e7a-4b4d-9f0e-5f5f2b7d8a33',
   * });
   * ```
   */
  list(body: DocumentListParams, options?: RequestOptions): APIPromise<DocumentListResponse> {
    return this._client.post('/filings/documents/list', { body, ...options });
  }

  /**
   * Removes a document from a case if it’s still eligible for deletion.
   *
   * @example
   * ```ts
   * const document = await client.filings.documents.delete({
   *   caseID: '2025-08-00251',
   *   filingID: '3',
   * });
   * ```
   */
  delete(body: DocumentDeleteParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/filings/documents/delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Returns a short-lived URL to download the PDF of a filed document in a case.
   *
   * @example
   * ```ts
   * const response = await client.filings.documents.pdf({
   *   caseID: '2025-08-00123',
   *   filingID: '2',
   * });
   * ```
   */
  pdf(body: DocumentPdfParams, options?: RequestOptions): APIPromise<DocumentPdfResponse> {
    return this._client.post('/filings/documents/pdf', { body, ...options });
  }

  /**
   * Sends a filed document for approval in a case.
   *
   * @example
   * ```ts
   * const response = await client.filings.documents.submit({
   *   caseID: '2025-08-00125',
   *   filingID: '8',
   * });
   * ```
   */
  submit(body: DocumentSubmitParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/filings/documents/submit', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Returns the details of a filed document for a given case and filing.
   *
   * @example
   * ```ts
   * const response = await client.filings.documents.view({
   *   caseID: '2025-08-00225',
   *   filingID: '15',
   * });
   * ```
   */
  view(body: DocumentViewParams, options?: RequestOptions): APIPromise<DocumentViewResponse> {
    return this._client.post('/filings/documents/view', { body, ...options });
  }

  /**
   * Removes a filed document from a case if it hasn’t been docketed.
   *
   * @example
   * ```ts
   * const response = await client.filings.documents.withdraw({
   *   caseID: '2025-08-00124',
   *   filingID: '15',
   * });
   * ```
   */
  withdraw(body: DocumentWithdrawParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/filings/documents/withdraw', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }
}

export interface DocumentCreateResponse {
  /**
   * ID of the created filing.
   */
  filingID?: string;
}

export type DocumentUpdateResponse = string;

export interface DocumentListResponse {
  /**
   * List of filed documents for the case.
   */
  documents?: Array<DocumentListResponse.Document>;
}

export namespace DocumentListResponse {
  export interface Document {
    /**
     * Timestamp when the filing was approved (null if not approved).
     */
    approved?: string | null;

    /**
     * Identifier of the user who approved the filing (null if not approved).
     */
    approvedBy?: string | null;

    /**
     * Timestamp when the filing was created.
     */
    created?: string;

    /**
     * Identifier linking the filing to a docket entry (null if not docketed).
     */
    docketId?: string | null;

    /**
     * Identifier of the type of document that was filed.
     */
    documentType?: string;

    /**
     * Unique identifier for the filing record.
     */
    filingID?: string;

    /**
     * Indicates whether the filing has been submitted for review.
     */
    isSubmitted?: boolean;

    /**
     * Identifier of the organization the user belongs to (null if a personal account).
     */
    organizationID?: string | null;

    /**
     * Identifier of the phase this document was filed in.
     */
    phaseID?: string;

    /**
     * Timestamp when the filing was last updated.
     */
    updated?: string;

    /**
     * Identifier of the user who filed the document.
     */
    userID?: string;
  }
}

export type DocumentDeleteResponse = string;

export interface DocumentPdfResponse {
  /**
   * Temporary URL to download the PDF.
   */
  url?: string;

  /**
   * Number of seconds the URL remains valid.
   */
  validForSeconds?: number;
}

export type DocumentSubmitResponse = string;

export interface DocumentViewResponse {
  document?: DocumentViewResponse.Document;
}

export namespace DocumentViewResponse {
  export interface Document {
    /**
     * When the filing was approved, if approved.
     */
    approved?: string | null;

    /**
     * User ID of the approver, if approved.
     */
    approvedBy?: string | null;

    /**
     * Case ID the filing belongs to.
     */
    caseID?: string;

    /**
     * When the filing was created.
     */
    created?: string;

    /**
     * Docket entry ID, if docketed.
     */
    docketId?: string | null;

    /**
     * Type identifier of the filed document.
     */
    documentId?: string;

    /**
     * Map of field IDs to their text content.
     */
    fields?: { [key: string]: string };

    /**
     * Unique filing record ID.
     */
    filingID?: string;

    /**
     * Whether the filing was submitted for review.
     */
    isSubmitted?: boolean;

    /**
     * Organization ID of the user, if any.
     */
    organizationID?: string | null;

    /**
     * Party on whose behalf the document was filed.
     */
    partyID?: string;

    /**
     * Phase in which the document was filed.
     */
    phaseID?: string;

    /**
     * When the filing was last updated.
     */
    updated?: string;

    /**
     * User who filed the document.
     */
    userID?: string;
  }
}

export type DocumentWithdrawResponse = string;

export interface DocumentCreateParams {
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

export interface DocumentUpdateParams {
  /**
   * The case ID the document belongs to.
   */
  caseID: string;

  /**
   * Key-value fields to update on the document.
   */
  fields: { [key: string]: string };

  /**
   * The filing ID of the document to update.
   */
  filingID: string;
}

export interface DocumentListParams {
  /**
   * The case ID to list filed documents for.
   */
  caseID: string;
}

export interface DocumentDeleteParams {
  /**
   * The case identifier.
   */
  caseID: string;

  /**
   * The filing/document identifier.
   */
  filingID: string;
}

export interface DocumentPdfParams {
  /**
   * Unique identifier of the case that contains the filed document.
   */
  caseID: string;

  /**
   * Unique identifier of the filed document whose PDF URL is requested.
   */
  filingID: string;
}

export interface DocumentSubmitParams {
  /**
   * The case ID.
   */
  caseID: string;

  /**
   * The filing ID.
   */
  filingID: string;
}

export interface DocumentViewParams {
  /**
   * The case identifier.
   */
  caseID: string;

  /**
   * The filing identifier.
   */
  filingID: string;
}

export interface DocumentWithdrawParams {
  /**
   * The case identifier.
   */
  caseID: string;

  /**
   * The filed document identifier.
   */
  filingID: string;
}

export declare namespace Documents {
  export {
    type DocumentCreateResponse as DocumentCreateResponse,
    type DocumentUpdateResponse as DocumentUpdateResponse,
    type DocumentListResponse as DocumentListResponse,
    type DocumentDeleteResponse as DocumentDeleteResponse,
    type DocumentPdfResponse as DocumentPdfResponse,
    type DocumentSubmitResponse as DocumentSubmitResponse,
    type DocumentViewResponse as DocumentViewResponse,
    type DocumentWithdrawResponse as DocumentWithdrawResponse,
    type DocumentCreateParams as DocumentCreateParams,
    type DocumentUpdateParams as DocumentUpdateParams,
    type DocumentListParams as DocumentListParams,
    type DocumentDeleteParams as DocumentDeleteParams,
    type DocumentPdfParams as DocumentPdfParams,
    type DocumentSubmitParams as DocumentSubmitParams,
    type DocumentViewParams as DocumentViewParams,
    type DocumentWithdrawParams as DocumentWithdrawParams,
  };
}
