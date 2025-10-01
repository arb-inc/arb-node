// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Cases extends APIResource {
  /**
   * Makes a case for the user.
   *
   * @example
   * ```ts
   * const _case = await client.cases.create();
   * ```
   */
  create(options?: RequestOptions): APIPromise<CaseCreateResponse> {
    return this._client.post('/cases/create', options);
  }

  /**
   * Returns the user's active cases with simple pagination via a cursor.
   *
   * @example
   * ```ts
   * const cases = await client.cases.list({
   *   cursor: '2025-07-15T10:20:30Z',
   * });
   * ```
   */
  list(body: CaseListParams, options?: RequestOptions): APIPromise<CaseListResponse> {
    return this._client.post('/cases/list', { body, ...options });
  }

  /**
   * Returns a simple snapshot of a case the user can access.
   *
   * @example
   * ```ts
   * const response = await client.cases.view({
   *   caseID: '2025-08-00139',
   * });
   * ```
   */
  view(body: CaseViewParams, options?: RequestOptions): APIPromise<CaseViewResponse> {
    return this._client.post('/cases/view', { body, ...options });
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

export interface CaseListResponse {
  /**
   * List of active cases for the user.
   */
  cases?: Array<CaseListResponse.Case>;

  /**
   * Cursor for fetching the next page (created time of the last case).
   */
  cursor?: string | null;

  /**
   * Indicates if more cases are available to fetch.
   */
  moreCases?: boolean;
}

export namespace CaseListResponse {
  export interface Case {
    /**
     * Summary information about the case.
     */
    overview?: Case.Overview;

    /**
     * People or entities involved in the case.
     */
    participants?: Array<Case.Participant>;

    /**
     * Users party in the case.
     */
    partyID?: string;
  }

  export namespace Case {
    /**
     * Summary information about the case.
     */
    export interface Overview {
      /**
       * Unique identifier for the case.
       */
      id?: string;

      /**
       * When the case was created.
       */
      created?: string;

      /**
       * Organization ID that created the case, if any.
       */
      createdByOrgID?: string | null;

      /**
       * ID of the user who created the case.
       */
      createdByUserID?: string;

      /**
       * Current phase identifier.
       */
      phaseID?: string;

      /**
       * Human-readable title for the case.
       */
      title?: string;

      /**
       * When the case was last updated.
       */
      updated?: string;
    }

    export interface Participant {
      /**
       * When the participant was added.
       */
      created?: string;

      /**
       * Whether this participant is an observer.
       */
      isObserver?: boolean;

      /**
       * Whether this participant is the primary representative.
       */
      isPrimary?: boolean;

      /**
       * Organization ID tied to the participant.
       */
      organizationID?: string | null;

      /**
       * Participant party role.
       */
      partyID?: string;

      /**
       * ID of the participant user.
       */
      userID?: string;
    }
  }
}

export interface CaseViewResponse {
  overview?: CaseViewResponse.Overview;

  /**
   * List of case participants.
   */
  participants?: Array<CaseViewResponse.Participant>;

  /**
   * Users party in the case.
   */
  partyID?: string;

  /**
   * Case timetable details.
   */
  timetable?: CaseViewResponse.Timetable;
}

export namespace CaseViewResponse {
  export interface Overview {
    /**
     * Unique identifier for the case.
     */
    id?: string;

    /**
     * Whether parties can currently submit evidence.
     */
    canSubmitEvidence?: boolean;

    /**
     * When the case was created.
     */
    created?: string;

    /**
     * ID of the organization that created the case, if any.
     */
    createdByOrgID?: string | null;

    /**
     * ID of the user who created the case.
     */
    createdByUserID?: string;

    /**
     * Current phase identifier.
     */
    phaseID?: string;

    /**
     * Human-friendly title for the case.
     */
    title?: string;

    /**
     * When the case was last updated.
     */
    updated?: string;
  }

  export interface Participant {
    /**
     * When the participant was added.
     */
    created?: string;

    /**
     * Whether the participant is an observer.
     */
    isObserver?: boolean;

    /**
     * Whether the participant is the primary representative.
     */
    isPrimary?: boolean;

    /**
     * Organization ID of the participant, if any.
     */
    organizationID?: string | null;

    /**
     * Role of the participant.
     */
    partyID?: string;

    /**
     * ID of the participant user.
     */
    userID?: string;
  }

  /**
   * Case timetable details.
   */
  export interface Timetable {
    phases?: Array<Timetable.Phase>;
  }

  export namespace Timetable {
    export interface Phase {
      /**
       * Phase identifier.
       */
      id?: string;

      /**
       * Documents relevant to this phase.
       */
      documents?: Array<Phase.Document>;

      /**
       * Deadline for required filings in this phase.
       */
      filingDeadline?: string;

      /**
       * Scheduled end of the phase, if set.
       */
      scheduledEnd?: string | null;

      /**
       * Scheduled start of the phase.
       */
      scheduledStart?: string;
    }

    export namespace Phase {
      export interface Document {
        /**
         * Document identifier.
         */
        id?: string;

        /**
         * Party who approves the document, if any.
         */
        approvedBy?: string | null;

        /**
         * Party who files the document.
         */
        filedBy?: string | null;

        /**
         * Maximum number of documents allowed.
         */
        maxAllowed?: number;

        /**
         * Whether the document is required.
         */
        required?: boolean;
      }
    }
  }
}

export interface CaseListParams {
  /**
   * Return cases created after this timestamp.
   */
  cursor?: string | null;
}

export interface CaseViewParams {
  /**
   * The identifier of the case to view.
   */
  caseID: string;
}

export declare namespace Cases {
  export {
    type CaseCreateResponse as CaseCreateResponse,
    type CaseListResponse as CaseListResponse,
    type CaseViewResponse as CaseViewResponse,
    type CaseListParams as CaseListParams,
    type CaseViewParams as CaseViewParams,
  };
}
