// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Schemas extends APIResource {
  /**
   * Retrieves all available schemas for case phases and documents.
   */
  list(options?: RequestOptions): APIPromise<SchemaListResponse> {
    return this._client.post('/schemas/list', options);
  }
}

export interface SchemaListResponse {
  /**
   * All available document schemas.
   */
  documents?: Array<SchemaListResponse.Document>;

  /**
   * All supported evidence types and their allowed MIME content types.
   */
  evidence?: Array<SchemaListResponse.Evidence>;

  /**
   * All available parties.
   */
  parties?: Array<SchemaListResponse.Party>;

  /**
   * All available case phases.
   */
  phases?: Array<SchemaListResponse.Phase>;
}

export namespace SchemaListResponse {
  export interface Document {
    /**
     * Unique document identifier.
     */
    id?: string;

    /**
     * Brief explanation of the document.
     */
    description?: string;

    /**
     * Human-readable document name.
     */
    displayName?: string;

    /**
     * Sections belonging to this document.
     */
    sections?: Array<Document.Section>;
  }

  export namespace Document {
    export interface Section {
      /**
       * Brief explanation of the section.
       */
      description?: string;

      /**
       * Human-readable section name.
       */
      displayName?: string;

      /**
       * Fillable fields in the section.
       */
      fields?: Array<Section.Field>;

      /**
       * Numeric order of this section within its parent document.
       */
      sortOrder?: number;
    }

    export namespace Section {
      export interface Field {
        /**
         * Unique field identifier.
         */
        id?: string;

        /**
         * Human-readable field name.
         */
        displayName?: string;

        /**
         * Maximum allowed content length.
         */
        maxLength?: number;

        /**
         * Minimum required content length.
         */
        minLength?: number;

        /**
         * Whether this field is mandatory.
         */
        required?: boolean;

        /**
         * Numeric order of this field within its parent section.
         */
        sortOrder?: number;
      }
    }
  }

  export interface Evidence {
    /**
     * Unique evidence type identifier.
     */
    id?: string;

    /**
     * Allowed MIME content types for this evidence type.
     */
    contentTypes?: Array<string>;

    /**
     * Human-readable evidence type name.
     */
    displayName?: string;
  }

  export interface Party {
    /**
     * Unique party identifier.
     */
    id?: string;

    /**
     * Brief explanation of the party.
     */
    description?: string;

    /**
     * Human-readable party name.
     */
    displayName?: string;
  }

  export interface Phase {
    /**
     * Unique phase identifier.
     */
    id?: string;

    /**
     * Brief explanation of the phase.
     */
    description?: string;

    /**
     * Human-readable phase name.
     */
    displayName?: string;
  }
}

export declare namespace Schemas {
  export { type SchemaListResponse as SchemaListResponse };
}
