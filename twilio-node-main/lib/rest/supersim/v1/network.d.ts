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

/**
 * Initialize the NetworkList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 */
declare function NetworkList(version: V1): NetworkListInstance;

interface NetworkListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): NetworkContext;
  /**
   * Streams NetworkInstance records from the API.
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
  each(callback?: (item: NetworkInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams NetworkInstance records from the API.
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
  each(opts?: NetworkListInstanceEachOptions, callback?: (item: NetworkInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a network
   *
   * @param sid - The SID of the Network resource to fetch
   */
  get(sid: string): NetworkContext;
  /**
   * Retrieve a single target page of NetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
  /**
   * Retrieve a single target page of NetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
  /**
   * Lists NetworkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: NetworkInstance[]) => any): Promise<NetworkInstance[]>;
  /**
   * Lists NetworkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: NetworkListInstanceOptions, callback?: (error: Error | null, items: NetworkInstance[]) => any): Promise<NetworkInstance[]>;
  /**
   * Retrieve a single page of NetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
  /**
   * Retrieve a single page of NetworkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: NetworkListInstancePageOptions, callback?: (error: Error | null, items: NetworkPage) => any): Promise<NetworkPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property isoCountry - The ISO country code of the Network resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mcc - The MCC of Network resource identifiers to be read
 * @property mnc - The MNC of Network resource identifiers to be read
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface NetworkListInstanceEachOptions {
  callback?: (item: NetworkInstance, done: (err?: Error) => void) => void;
  done?: Function;
  isoCountry?: string;
  limit?: number;
  mcc?: string;
  mnc?: string;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property isoCountry - The ISO country code of the Network resources to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property mcc - The MCC of Network resource identifiers to be read
 * @property mnc - The MNC of Network resource identifiers to be read
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface NetworkListInstanceOptions {
  isoCountry?: string;
  limit?: number;
  mcc?: string;
  mnc?: string;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property isoCountry - The ISO country code of the Network resources to read
 * @property mcc - The MCC of Network resource identifiers to be read
 * @property mnc - The MNC of Network resource identifiers to be read
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface NetworkListInstancePageOptions {
  isoCountry?: string;
  mcc?: string;
  mnc?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface NetworkPayload extends NetworkResource, Page.TwilioResponsePayload {
}

interface NetworkResource {
  friendly_name: string;
  identifiers: object[];
  iso_country: string;
  sid: string;
  url: string;
}

interface NetworkSolution {
}


declare class NetworkContext {
  /**
   * Initialize the NetworkContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param sid - The SID of the Network resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a NetworkInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: NetworkInstance) => any): Promise<NetworkInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class NetworkInstance extends SerializableClass {
  /**
   * Initialize the NetworkContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the Network resource to fetch
   */
  constructor(version: V1, payload: NetworkPayload, sid: string);

  private _proxy: NetworkContext;
  /**
   * fetch a NetworkInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: NetworkInstance) => any): Promise<NetworkInstance>;
  friendlyName: string;
  identifiers: object[];
  isoCountry: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class NetworkPage extends Page<V1, NetworkPayload, NetworkResource, NetworkInstance> {
  /**
   * Initialize the NetworkPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: NetworkSolution);

  /**
   * Build an instance of NetworkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NetworkPayload): NetworkInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NetworkContext, NetworkInstance, NetworkList, NetworkListInstance, NetworkListInstanceEachOptions, NetworkListInstanceOptions, NetworkListInstancePageOptions, NetworkPage, NetworkPayload, NetworkResource, NetworkSolution }