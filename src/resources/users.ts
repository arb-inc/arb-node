// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Users extends APIResource {
  /**
   * Returns the list of users that belong to the same organization as the requester.
   */
  list(options?: RequestOptions): APIPromise<UserListResponse> {
    return this._client.post('/users/list', options);
  }
}

export interface UserListResponse {
  users?: Array<UserListResponse.User>;
}

export namespace UserListResponse {
  export interface User {
    /**
     * ID of the user.
     */
    id?: string;
  }
}

export declare namespace Users {
  export { type UserListResponse as UserListResponse };
}
