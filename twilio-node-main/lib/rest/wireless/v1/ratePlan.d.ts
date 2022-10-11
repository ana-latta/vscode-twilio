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

type RatePlanDataLimitStrategy = 'block'|'throttle';

/**
 * Initialize the RatePlanList
 *
 * @param version - Version of the resource
 */
declare function RatePlanList(version: V1): RatePlanListInstance;

/**
 * Options to pass to update
 *
 * @property friendlyName - A string to describe the resource
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface RatePlanInstanceUpdateOptions {
  friendlyName?: string;
  uniqueName?: string;
}

interface RatePlanListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): RatePlanContext;
  /**
   * create a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * create a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: RatePlanListInstanceCreateOptions, callback?: (error: Error | null, item: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * Streams RatePlanInstance records from the API.
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
  each(callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams RatePlanInstance records from the API.
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
  each(opts?: RatePlanListInstanceEachOptions, callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a rate_plan
   *
   * @param sid - The SID that identifies the resource to fetch
   */
  get(sid: string): RatePlanContext;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Retrieve a single target page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
  /**
   * Lists RatePlanInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: RatePlanListInstanceOptions, callback?: (error: Error | null, items: RatePlanInstance[]) => any): Promise<RatePlanInstance[]>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Retrieve a single page of RatePlanInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: RatePlanListInstancePageOptions, callback?: (error: Error | null, items: RatePlanPage) => any): Promise<RatePlanPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property dataEnabled - Whether SIMs can use GPRS/3G/4G/LTE data connectivity
 * @property dataLimit - The total data usage in Megabytes that the Network allows during one month on the home network
 * @property dataMetering - The model used to meter data usage
 * @property friendlyName - A string to describe the resource
 * @property internationalRoaming - The services that SIMs capable of using GPRS/3G/4G/LTE data connectivity can use outside of the United States
 * @property internationalRoamingDataLimit - The total data usage (download and upload combined) in Megabytes that the Network allows during one month when roaming outside the United States
 * @property messagingEnabled - Whether SIMs can make, send, and receive SMS using Commands
 * @property nationalRoamingDataLimit - The total data usage in Megabytes that the Network allows during one month on non-home networks in the United States
 * @property nationalRoamingEnabled - Whether SIMs can roam on networks other than the home network in the United States
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 * @property voiceEnabled - Deprecated
 */
interface RatePlanListInstanceCreateOptions {
  dataEnabled?: boolean;
  dataLimit?: number;
  dataMetering?: string;
  friendlyName?: string;
  internationalRoaming?: string | string[];
  internationalRoamingDataLimit?: number;
  messagingEnabled?: boolean;
  nationalRoamingDataLimit?: number;
  nationalRoamingEnabled?: boolean;
  uniqueName?: string;
  voiceEnabled?: boolean;
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
interface RatePlanListInstanceEachOptions {
  callback?: (item: RatePlanInstance, done: (err?: Error) => void) => void;
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
interface RatePlanListInstanceOptions {
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
interface RatePlanListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface RatePlanPayload extends RatePlanResource, Page.TwilioResponsePayload {
}

interface RatePlanResource {
  account_sid: string;
  data_enabled: boolean;
  data_limit: number;
  data_metering: string;
  date_created: Date;
  date_updated: Date;
  friendly_name: string;
  international_roaming: string[];
  international_roaming_data_limit: number;
  messaging_enabled: boolean;
  national_roaming_data_limit: number;
  national_roaming_enabled: boolean;
  sid: string;
  unique_name: string;
  url: string;
  voice_enabled: boolean;
}

interface RatePlanSolution {
}


declare class RatePlanContext {
  /**
   * Initialize the RatePlanContext
   *
   * @param version - Version of the resource
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, sid: string);

  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RatePlanInstanceUpdateOptions, callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
}


declare class RatePlanInstance extends SerializableClass {
  /**
   * Initialize the RatePlanContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID that identifies the resource to fetch
   */
  constructor(version: V1, payload: RatePlanPayload, sid: string);

  private _proxy: RatePlanContext;
  accountSid: string;
  dataEnabled: boolean;
  dataLimit: number;
  dataMetering: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
  friendlyName: string;
  internationalRoaming: string[];
  internationalRoamingDataLimit: number;
  messagingEnabled: boolean;
  nationalRoamingDataLimit: number;
  nationalRoamingEnabled: boolean;
  /**
   * remove a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  /**
   * update a RatePlanInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
  /**
   * update a RatePlanInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RatePlanInstanceUpdateOptions, callback?: (error: Error | null, items: RatePlanInstance) => any): Promise<RatePlanInstance>;
  url: string;
  voiceEnabled: boolean;
}


declare class RatePlanPage extends Page<V1, RatePlanPayload, RatePlanResource, RatePlanInstance> {
  /**
   * Initialize the RatePlanPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RatePlanSolution);

  /**
   * Build an instance of RatePlanInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RatePlanPayload): RatePlanInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RatePlanContext, RatePlanDataLimitStrategy, RatePlanInstance, RatePlanInstanceUpdateOptions, RatePlanList, RatePlanListInstance, RatePlanListInstanceCreateOptions, RatePlanListInstanceEachOptions, RatePlanListInstanceOptions, RatePlanListInstancePageOptions, RatePlanPage, RatePlanPayload, RatePlanResource, RatePlanSolution }
