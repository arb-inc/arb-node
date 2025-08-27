// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { ArbInc } from '../client';

export abstract class APIResource {
  protected _client: ArbInc;

  constructor(client: ArbInc) {
    this._client = client;
  }
}
