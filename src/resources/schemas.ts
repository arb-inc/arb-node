// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Schemas extends APIResource {
  /**
   * Returns all schemas used on the platform, including documents, parties, and
   * phases.
   *
   * @example
   * ```ts
   * const schemas = await client.schemas.list();
   * ```
   */
  list(
    params: SchemaListParams | null | undefined = undefined,
    options?: RequestOptions,
  ): APIPromise<SchemaListResponse> {
    const { body } = params ?? {};
    return this._client.post('/schemas/list', { body: body, ...options });
  }
}

export interface SchemaListResponse {
  /**
   * Document schema definitions used across the platform.
   */
  documents: Array<SchemaListResponse.Document>;

  /**
   * Party types that can be assigned to a case.
   */
  parties: Array<SchemaListResponse.Party>;

  /**
   * Standard case lifecycle phases.
   */
  phases: Array<SchemaListResponse.Phase>;
}

export namespace SchemaListResponse {
  export interface Document {
    id?: string;

    description?: string;

    displayName?: string;

    /**
     * Groups of fields inside a document.
     */
    sections?: Array<Document.Section>;
  }

  export namespace Document {
    export interface Section {
      description?: string;

      displayName?: string;

      /**
       * Individual input fields inside a section.
       */
      fields?: Array<Section.Field>;

      sortOrder?: number;
    }

    export namespace Section {
      export interface Field {
        id?: string;

        displayName?: string;

        maxLength?: number;

        minLength?: number;

        required?: boolean;

        sortOrder?: number;
      }
    }
  }

  export interface Party {
    id?: string;

    description?: string;

    displayName?: string;
  }

  export interface Phase {
    id?: string;

    description?: string;

    displayName?: string;
  }
}

export interface SchemaListParams {
  /**
   * Empty JSON body.
   */
  body?: unknown;
}

export declare namespace Schemas {
  export { type SchemaListResponse as SchemaListResponse, type SchemaListParams as SchemaListParams };
}
