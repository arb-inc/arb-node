// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';

export class Uploads extends APIResource {
  /**
   * Upload one file to a case with a short description.
   *
   * @example
   * ```ts
   * const upload = await client.evidence.uploads.create({
   *   caseID: '2025-08-00123',
   *   description: 'Photo from the incident on May 5, 2025',
   *   file: fs.createReadStream('path/to/file'),
   * });
   * ```
   */
  create(body: UploadCreateParams, options?: RequestOptions): APIPromise<UploadCreateResponse> {
    return this._client.post(
      '/evidence/uploads/create',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }

  /**
   * Returns the uploads the user is allowed to access for a given case.
   *
   * @example
   * ```ts
   * const uploads = await client.evidence.uploads.list({
   *   caseID: '2025-08-00123',
   * });
   * ```
   */
  list(body: UploadListParams, options?: RequestOptions): APIPromise<UploadListResponse> {
    return this._client.post('/evidence/uploads/list', { body, ...options });
  }

  /**
   * Removes a specific upload from a case if you have access.
   *
   * @example
   * ```ts
   * const upload = await client.evidence.uploads.delete({
   *   caseID: '2025-08-00123',
   *   uploadID: '32',
   * });
   * ```
   */
  delete(body: UploadDeleteParams, options?: RequestOptions): APIPromise<string> {
    return this._client.post('/evidence/uploads/delete', {
      body,
      ...options,
      headers: buildHeaders([{ Accept: 'text/plain' }, options?.headers]),
    });
  }

  /**
   * Returns a short-lived URL so you can download the upload.
   *
   * @example
   * ```ts
   * const response = await client.evidence.uploads.download({
   *   caseID: '2025-08-00123',
   *   uploadID: '3',
   * });
   * ```
   */
  download(body: UploadDownloadParams, options?: RequestOptions): APIPromise<UploadDownloadResponse> {
    return this._client.post('/evidence/uploads/download', { body, ...options });
  }
}

export interface UploadCreateResponse {
  /**
   * ID of the created evidence upload.
   */
  uploadID?: string;
}

export interface UploadListResponse {
  /**
   * List of evidence uploads visible to the user.
   */
  uploads?: Array<UploadListResponse.Upload>;
}

export namespace UploadListResponse {
  export interface Upload {
    /**
     * Evidence category classification.
     */
    categoryID?: string;

    /**
     * MIME type of the uploaded file.
     */
    contentType?: string;

    /**
     * When the evidence was submitted (RFC 3339).
     */
    created?: string;

    /**
     * Text description of the evidence.
     */
    description?: string;

    /**
     * Organization the user belongs to, if any.
     */
    organizationID?: string | null;

    /**
     * Party linked to the evidence.
     */
    partyID?: string;

    /**
     * Case phase at submission.
     */
    phaseID?: string;

    /**
     * Unique identifier for the upload.
     */
    uploadID?: string;

    /**
     * User who submitted the evidence.
     */
    userID?: string;
  }
}

export type UploadDeleteResponse = string;

export interface UploadDownloadResponse {
  /**
   * Time-limited URL for downloading the file.
   */
  url?: string;

  /**
   * How long the URL is valid, in seconds.
   */
  validForSeconds?: number;
}

export interface UploadCreateParams {
  /**
   * ID of the case to attach the evidence to. Must be sent before the file part.
   */
  caseID: string;

  /**
   * Short description of the evidence. Must be sent before the file part.
   */
  description: string;

  /**
   * The evidence file to upload (single file only).
   */
  file: Uploadable;
}

export interface UploadListParams {
  /**
   * The case identifier to look up uploads for.
   */
  caseID: string;
}

export interface UploadDeleteParams {
  /**
   * The case identifier.
   */
  caseID: string;

  /**
   * The upload identifier to delete.
   */
  uploadID: string;
}

export interface UploadDownloadParams {
  /**
   * The case identifier.
   */
  caseID: string;

  /**
   * The upload identifier for which to generate a download URL.
   */
  uploadID: string;
}

export declare namespace Uploads {
  export {
    type UploadCreateResponse as UploadCreateResponse,
    type UploadListResponse as UploadListResponse,
    type UploadDeleteResponse as UploadDeleteResponse,
    type UploadDownloadResponse as UploadDownloadResponse,
    type UploadCreateParams as UploadCreateParams,
    type UploadListParams as UploadListParams,
    type UploadDeleteParams as UploadDeleteParams,
    type UploadDownloadParams as UploadDownloadParams,
  };
}
