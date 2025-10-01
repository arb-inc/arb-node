// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MailingsAPI from './mailings';
import { Mailings } from './mailings';

export class ServiceOfNotice extends APIResource {
  mailings: MailingsAPI.Mailings = new MailingsAPI.Mailings(this._client);
}

ServiceOfNotice.Mailings = Mailings;

export declare namespace ServiceOfNotice {
  export { Mailings as Mailings };
}
