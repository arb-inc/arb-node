// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Cases extends APIResource {
  /**
   * Makes a case for the user.
   */
  create(options?: RequestOptions): APIPromise<CaseCreateResponse> {
    return this._client.post('/cases/create', options);
  }
}

export interface CaseCreateResponse {
  /**
   * Unique ID of the new case.
   */
  caseID?: string;

  /**
   * Short title for the case.
   */
  title?: string;
}

export declare namespace Cases {
  export { type CaseCreateResponse as CaseCreateResponse };
}
