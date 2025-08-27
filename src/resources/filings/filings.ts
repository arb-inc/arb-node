// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentsAPI from './documents';
import { DocumentUploadParams, DocumentUploadResponse, Documents } from './documents';

export class Filings extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
}

Filings.Documents = Documents;

export declare namespace Filings {
  export {
    Documents as Documents,
    type DocumentUploadResponse as DocumentUploadResponse,
    type DocumentUploadParams as DocumentUploadParams,
  };
}
