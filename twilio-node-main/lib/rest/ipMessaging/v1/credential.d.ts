/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

type CredentialPushService = 'gcm'|'apn'|'fcm';

/**
 * Initialize the CredentialList
 *
 * @param version - Version of the resource
 */
declare function CredentialList(version: V1): CredentialListInstance;

/**
 * Options to pass to update
 *
 * @property apiKey - The api_key
 * @property certificate - The certificate
 * @property friendlyName - The friendly_name
 * @property privateKey - The private_key
 * @property sandbox - The sandbox
 * @property secret - The secret
 */
interface CredentialInstanceUpdateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
}

interface CredentialListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CredentialContext;
  /**
   * create a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CredentialListInstanceCreateOptions, callback?: (error: Error | null, item: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * Streams CredentialInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CredentialInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CredentialListInstanceEachOptions, callback?: (item: CredentialInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a credential
   *
   * @param sid - The sid
   */
  get(sid: string): CredentialContext;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Retrieve a single target page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
  /**
   * Lists CredentialInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CredentialListInstanceOptions, callback?: (error: Error | null, items: CredentialInstance[]) => any): Promise<CredentialInstance[]>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Retrieve a single page of CredentialInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CredentialListInstancePageOptions, callback?: (error: Error | null, items: CredentialPage) => any): Promise<CredentialPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property apiKey - The api_key
 * @property certificate - The certificate
 * @property friendlyName - The friendly_name
 * @property privateKey - The private_key
 * @property sandbox - The sandbox
 * @property secret - The secret
 * @property type - The type
 */
interface CredentialListInstanceCreateOptions {
  apiKey?: string;
  certificate?: string;
  friendlyName?: string;
  privateKey?: string;
  sandbox?: boolean;
  secret?: string;
  type: CredentialPushService;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface CredentialListInstanceEachOptions {
  callback?: (item: CredentialInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface CredentialListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface CredentialListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface CredentialPayload extends CredentialResource, Page.TwilioResponsePayload {
}

interface CredentialResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  sandbox: string;
  sid: string;
  type: CredentialPushService;
  url: string;
}

interface CredentialSolution {
}


declare class CredentialContext {
  /**
   * Initialize the CredentialContext
   *
   * @param version - Version of the resource
   * @param sid - The sid
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
}


declare class CredentialInstance extends SerializableClass {
  /**
   * Initialize the CredentialContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The sid
   */
  constructor(version: V1, payload: CredentialPayload, sid: string);

  private _proxy: CredentialContext;
  accountSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
  friendlyName: string;
  /**
   * remove a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<boolean>;
  sandbox: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: CredentialPushService;
  /**
   * update a CredentialInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
  /**
   * update a CredentialInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CredentialInstanceUpdateOptions, callback?: (error: Error | null, items: CredentialInstance) => any): Promise<CredentialInstance>;
  url: string;
}


declare class CredentialPage extends Page<V1, CredentialPayload, CredentialResource, CredentialInstance> {
  /**
   * Initialize the CredentialPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: CredentialSolution);

  /**
   * Build an instance of CredentialInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CredentialPayload): CredentialInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CredentialContext, CredentialInstance, CredentialInstanceUpdateOptions, CredentialList, CredentialListInstance, CredentialListInstanceCreateOptions, CredentialListInstanceEachOptions, CredentialListInstanceOptions, CredentialListInstancePageOptions, CredentialPage, CredentialPayload, CredentialPushService, CredentialResource, CredentialSolution }
