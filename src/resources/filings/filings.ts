// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DocumentsAPI from './documents';
import {
  DocumentCreateParams,
  DocumentCreateResponse,
  DocumentDeleteParams,
  DocumentDeleteResponse,
  DocumentListParams,
  DocumentListResponse,
  DocumentPdfParams,
  DocumentPdfResponse,
  DocumentSubmitParams,
  DocumentSubmitResponse,
  DocumentUpdateParams,
  DocumentUpdateResponse,
  DocumentViewParams,
  DocumentViewResponse,
  DocumentWithdrawParams,
  DocumentWithdrawResponse,
  Documents,
} from './documents';

export class Filings extends APIResource {
  documents: DocumentsAPI.Documents = new DocumentsAPI.Documents(this._client);
}

Filings.Documents = Documents;

export declare namespace Filings {
  export {
    Documents as Documents,
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
