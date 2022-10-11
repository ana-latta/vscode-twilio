/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type SyncListItemQueryFromBoundType = 'inclusive'|'exclusive';

type SyncListItemQueryResultOrder = 'asc'|'desc';

/**
 * Initialize the SyncListItemList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Sync Service that the resource is associated with
 * @param listSid - The SID of the Sync List that contains the List Item
 */
declare function SyncListItemList(version: V1, serviceSid: string, listSid: string): SyncListItemListInstance;

/**
 * Options to pass to remove
 *
 * @property ifMatch - The If-Match HTTP request header
 */
interface SyncListItemInstanceRemoveOptions {
  ifMatch?: string;
}

/**
 * Options to pass to update
 *
 * @property collectionTtl - How long, in seconds, before the List Item's parent Sync List expires
 * @property data - A JSON string that represents an arbitrary, schema-less object that the List Item stores
 * @property ifMatch - The If-Match HTTP request header
 * @property itemTtl - How long, in seconds, before the List Item expires
 * @property ttl - An alias for item_ttl
 */
interface SyncListItemInstanceUpdateOptions {
  collectionTtl?: number;
  data?: object;
  ifMatch?: string;
  itemTtl?: number;
  ttl?: number;
}

interface SyncListItemListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SyncListItemContext;
  /**
   * create a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: SyncListItemListInstanceCreateOptions, callback?: (error: Error | null, item: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  /**
   * Streams SyncListItemInstance records from the API.
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
  each(callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SyncListItemInstance records from the API.
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
  each(opts?: SyncListItemListInstanceEachOptions, callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a sync_list_item
   *
   * @param index - The index of the Sync List Item resource to fetch
   */
  get(index: string): SyncListItemContext;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Retrieve a single target page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
  /**
   * Lists SyncListItemInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SyncListItemListInstanceOptions, callback?: (error: Error | null, items: SyncListItemInstance[]) => any): Promise<SyncListItemInstance[]>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Retrieve a single page of SyncListItemInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SyncListItemListInstancePageOptions, callback?: (error: Error | null, items: SyncListItemPage) => any): Promise<SyncListItemPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property collectionTtl - How long, in seconds, before the List Item's parent Sync List expires
 * @property data - A JSON string that represents an arbitrary, schema-less object that the List Item stores
 * @property itemTtl - How long, in seconds, before the List Item expires
 * @property ttl - An alias for item_ttl
 */
interface SyncListItemListInstanceCreateOptions {
  collectionTtl?: number;
  data: object;
  itemTtl?: number;
  ttl?: number;
}

/**
 * Options to pass to each
 *
 * @property bounds - Whether to include the List Item referenced by the from parameter
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property from - The index of the first Sync List Item resource to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - The order to return the List Items
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SyncListItemListInstanceEachOptions {
  bounds?: SyncListItemQueryFromBoundType;
  callback?: (item: SyncListItemInstance, done: (err?: Error) => void) => void;
  done?: Function;
  from?: string;
  limit?: number;
  order?: SyncListItemQueryResultOrder;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property bounds - Whether to include the List Item referenced by the from parameter
 * @property from - The index of the first Sync List Item resource to read
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property order - The order to return the List Items
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SyncListItemListInstanceOptions {
  bounds?: SyncListItemQueryFromBoundType;
  from?: string;
  limit?: number;
  order?: SyncListItemQueryResultOrder;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property bounds - Whether to include the List Item referenced by the from parameter
 * @property from - The index of the first Sync List Item resource to read
 * @property order - The order to return the List Items
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SyncListItemListInstancePageOptions {
  bounds?: SyncListItemQueryFromBoundType;
  from?: string;
  order?: SyncListItemQueryResultOrder;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SyncListItemPayload extends SyncListItemResource, Page.TwilioResponsePayload {
}

interface SyncListItemResource {
  account_sid: string;
  created_by: string;
  data: object;
  date_created: Date;
  date_expires: Date;
  date_updated: Date;
  index: number;
  list_sid: string;
  revision: string;
  service_sid: string;
  url: string;
}

interface SyncListItemSolution {
  listSid?: string;
  serviceSid?: string;
}


declare class SyncListItemContext {
  /**
   * Initialize the SyncListItemContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Sync Service with the Sync List Item resource to fetch
   * @param listSid - The SID of the Sync List with the Sync List Item resource to fetch
   * @param index - The index of the Sync List Item resource to fetch
   */
  constructor(version: V1, serviceSid: string, listSid: string, index: number);

  /**
   * fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  /**
   * remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<boolean>;
  /**
   * remove a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: SyncListItemInstanceRemoveOptions, callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncListItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
}


declare class SyncListItemInstance extends SerializableClass {
  /**
   * Initialize the SyncListItemContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Sync Service that the resource is associated with
   * @param listSid - The SID of the Sync List that contains the List Item
   * @param index - The index of the Sync List Item resource to fetch
   */
  constructor(version: V1, payload: SyncListItemPayload, serviceSid: string, listSid: string, index: number);

  private _proxy: SyncListItemContext;
  accountSid: string;
  createdBy: string;
  data: any;
  dateCreated: Date;
  dateExpires: Date;
  dateUpdated: Date;
  /**
   * fetch a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  index: number;
  listSid: string;
  /**
   * remove a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<boolean>;
  /**
   * remove a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  remove(opts?: SyncListItemInstanceRemoveOptions, callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<boolean>;
  revision: string;
  serviceSid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SyncListItemInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  /**
   * update a SyncListItemInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SyncListItemInstanceUpdateOptions, callback?: (error: Error | null, items: SyncListItemInstance) => any): Promise<SyncListItemInstance>;
  url: string;
}


declare class SyncListItemPage extends Page<V1, SyncListItemPayload, SyncListItemResource, SyncListItemInstance> {
  /**
   * Initialize the SyncListItemPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SyncListItemSolution);

  /**
   * Build an instance of SyncListItemInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SyncListItemPayload): SyncListItemInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SyncListItemContext, SyncListItemInstance, SyncListItemInstanceRemoveOptions, SyncListItemInstanceUpdateOptions, SyncListItemList, SyncListItemListInstance, SyncListItemListInstanceCreateOptions, SyncListItemListInstanceEachOptions, SyncListItemListInstanceOptions, SyncListItemListInstancePageOptions, SyncListItemPage, SyncListItemPayload, SyncListItemQueryFromBoundType, SyncListItemQueryResultOrder, SyncListItemResource, SyncListItemSolution }
