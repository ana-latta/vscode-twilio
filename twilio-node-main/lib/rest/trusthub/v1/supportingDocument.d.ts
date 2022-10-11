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

type SupportingDocumentStatus = 'draft'|'pending-review'|'rejected'|'approved'|'expired'|'provisionally-approved';

/**
 * Initialize the SupportingDocumentList
 *
 * @param version - Version of the resource
 */
declare function SupportingDocumentList(version: V1): SupportingDocumentListInstance;

/**
 * Options to pass to update
 *
 * @property attributes - The set of parameters that compose the Supporting Document resource
 * @property friendlyName - The string that you assigned to describe the resource
 */
interface SupportingDocumentInstanceUpdateOptions {
  attributes?: object;
  friendlyName?: string;
}

interface SupportingDocumentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SupportingDocumentContext;
  /**
   * create a SupportingDocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SupportingDocumentListInstanceCreateOptions, callback?: (error: Error | null, item: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  /**
   * Streams SupportingDocumentInstance records from the API.
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
  each(callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SupportingDocumentInstance records from the API.
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
  each(opts?: SupportingDocumentListInstanceEachOptions, callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a supporting_document
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): SupportingDocumentContext;
  /**
   * Retrieve a single target page of SupportingDocumentInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  /**
   * Retrieve a single target page of SupportingDocumentInstance records from the
   * API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  /**
   * Lists SupportingDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any): Promise<SupportingDocumentInstance[]>;
  /**
   * Lists SupportingDocumentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SupportingDocumentListInstanceOptions, callback?: (error: Error | null, items: SupportingDocumentInstance[]) => any): Promise<SupportingDocumentInstance[]>;
  /**
   * Retrieve a single page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  /**
   * Retrieve a single page of SupportingDocumentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SupportingDocumentListInstancePageOptions, callback?: (error: Error | null, items: SupportingDocumentPage) => any): Promise<SupportingDocumentPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property attributes - The set of parameters that compose the Supporting Documents resource
 * @property friendlyName - The string that you assigned to describe the resource
 * @property type - The type of the Supporting Document
 */
interface SupportingDocumentListInstanceCreateOptions {
  attributes?: object;
  friendlyName: string;
  type: string;
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
interface SupportingDocumentListInstanceEachOptions {
  callback?: (item: SupportingDocumentInstance, done: (err?: Error) => void) => void;
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
interface SupportingDocumentListInstanceOptions {
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
interface SupportingDocumentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SupportingDocumentPayload extends SupportingDocumentResource, Page.TwilioResponsePayload {
}

interface SupportingDocumentResource {
  account_sid: string;
  attributes: object;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  mime_type: string;
  sid: string;
  status: SupportingDocumentStatus;
  type: string;
  url: string;
}

interface SupportingDocumentSolution {
}


declare class SupportingDocumentContext {
  /**
   * Initialize the SupportingDocumentContext
   *
   * @param version - Version of the resource
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  /**
   * remove a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  /**
   * update a SupportingDocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SupportingDocumentInstanceUpdateOptions, callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
}


declare class SupportingDocumentInstance extends SerializableClass {
  /**
   * Initialize the SupportingDocumentContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: SupportingDocumentPayload, sid: string);

  private _proxy: SupportingDocumentContext;
  accountSid: string;
  attributes: any;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  friendlyName: string;
  mimeType: string;
  /**
   * remove a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<boolean>;
  sid: string;
  status: SupportingDocumentStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  type: string;
  /**
   * update a SupportingDocumentInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  /**
   * update a SupportingDocumentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SupportingDocumentInstanceUpdateOptions, callback?: (error: Error | null, items: SupportingDocumentInstance) => any): Promise<SupportingDocumentInstance>;
  url: string;
}


declare class SupportingDocumentPage extends Page<V1, SupportingDocumentPayload, SupportingDocumentResource, SupportingDocumentInstance> {
  /**
   * Initialize the SupportingDocumentPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SupportingDocumentSolution);

  /**
   * Build an instance of SupportingDocumentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SupportingDocumentPayload): SupportingDocumentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SupportingDocumentContext, SupportingDocumentInstance, SupportingDocumentInstanceUpdateOptions, SupportingDocumentList, SupportingDocumentListInstance, SupportingDocumentListInstanceCreateOptions, SupportingDocumentListInstanceEachOptions, SupportingDocumentListInstanceOptions, SupportingDocumentListInstancePageOptions, SupportingDocumentPage, SupportingDocumentPayload, SupportingDocumentResource, SupportingDocumentSolution, SupportingDocumentStatus }
