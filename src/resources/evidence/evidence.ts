// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UploadsAPI from './uploads';
import {
  UploadCreateParams,
  UploadCreateResponse,
  UploadDeleteParams,
  UploadDeleteResponse,
  UploadDownloadParams,
  UploadDownloadResponse,
  UploadListParams,
  UploadListResponse,
  Uploads,
} from './uploads';

export class Evidence extends APIResource {
  uploads: UploadsAPI.Uploads = new UploadsAPI.Uploads(this._client);
}

Evidence.Uploads = Uploads;

export declare namespace Evidence {
  export {
    Uploads as Uploads,
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
