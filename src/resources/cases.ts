// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Cases extends APIResource {
  /**
   * Creates a new case, assigning ownership to the provided primary user.
   *
   * @example
   * ```ts
   * const _case = await client.cases.create({
   *   primaryUserID: 'c17c3433-81b3-4096-90e0-9fbb32c06204',
   * });
   * ```
   */
  create(body: CaseCreateParams, options?: RequestOptions): APIPromise<CaseCreateResponse> {
    return this._client.post('/cases/create', { body, ...options });
  }
}

export interface CaseCreateResponse {
  /**
   * Unique identifier of the created case.
   */
  caseID?: string;

  /**
   * Title of the created case.
   */
  title?: string;
}

export interface CaseCreateParams {
  /**
   * UUID of the primary user to associate with this case.
   */
  primaryUserID: string;
}

export declare namespace Cases {
  export { type CaseCreateResponse as CaseCreateResponse, type CaseCreateParams as CaseCreateParams };
}
