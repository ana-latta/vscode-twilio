/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { DeploymentList } from './environment/deployment';
import { DeploymentListInstance } from './environment/deployment';
import { LogList } from './environment/log';
import { LogListInstance } from './environment/log';
import { SerializableClass } from '../../../../interfaces';
import { VariableList } from './environment/variable';
import { VariableListInstance } from './environment/variable';

/**
 * Initialize the EnvironmentList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the Environment resource is associated with
 */
declare function EnvironmentList(version: V1, serviceSid: string): EnvironmentListInstance;

interface EnvironmentListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EnvironmentContext;
  /**
   * create a EnvironmentInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: EnvironmentListInstanceCreateOptions, callback?: (error: Error | null, item: EnvironmentInstance) => any): Promise<EnvironmentInstance>;
  /**
   * Streams EnvironmentInstance records from the API.
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
  each(callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams EnvironmentInstance records from the API.
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
  each(opts?: EnvironmentListInstanceEachOptions, callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a environment
   *
   * @param sid - The SID of the Environment resource to fetch
   */
  get(sid: string): EnvironmentContext;
  /**
   * Retrieve a single target page of EnvironmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
  /**
   * Retrieve a single target page of EnvironmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
  /**
   * Lists EnvironmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: EnvironmentInstance[]) => any): Promise<EnvironmentInstance[]>;
  /**
   * Lists EnvironmentInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: EnvironmentListInstanceOptions, callback?: (error: Error | null, items: EnvironmentInstance[]) => any): Promise<EnvironmentInstance[]>;
  /**
   * Retrieve a single page of EnvironmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
  /**
   * Retrieve a single page of EnvironmentInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: EnvironmentListInstancePageOptions, callback?: (error: Error | null, items: EnvironmentPage) => any): Promise<EnvironmentPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property domainSuffix - A URL-friendly name that represents the environment
 * @property uniqueName - A user-defined string that uniquely identifies the Environment resource
 */
interface EnvironmentListInstanceCreateOptions {
  domainSuffix?: string;
  uniqueName: string;
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
interface EnvironmentListInstanceEachOptions {
  callback?: (item: EnvironmentInstance, done: (err?: Error) => void) => void;
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
interface EnvironmentListInstanceOptions {
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
interface EnvironmentListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface EnvironmentPayload extends EnvironmentResource, Page.TwilioResponsePayload {
}

interface EnvironmentResource {
  account_sid: string;
  build_sid: string;
  date_created: Date;
  date_updated: Date;
  domain_name: string;
  domain_suffix: string;
  links: string;
  service_sid: string;
  sid: string;
  unique_name: string;
  url: string;
}

interface EnvironmentSolution {
  serviceSid?: string;
}


declare class EnvironmentContext {
  /**
   * Initialize the EnvironmentContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the Environment resource from
   * @param sid - The SID of the Environment resource to fetch
   */
  constructor(version: V1, serviceSid: string, sid: string);

  deployments: DeploymentListInstance;
  /**
   * fetch a EnvironmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EnvironmentInstance) => any): Promise<EnvironmentInstance>;
  logs: LogListInstance;
  /**
   * remove a EnvironmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: EnvironmentInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  variables: VariableListInstance;
}


declare class EnvironmentInstance extends SerializableClass {
  /**
   * Initialize the EnvironmentContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the Environment resource is associated with
   * @param sid - The SID of the Environment resource to fetch
   */
  constructor(version: V1, payload: EnvironmentPayload, serviceSid: string, sid: string);

  private _proxy: EnvironmentContext;
  accountSid: string;
  buildSid: string;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * Access the deployments
   */
  deployments(): DeploymentListInstance;
  domainName: string;
  domainSuffix: string;
  /**
   * fetch a EnvironmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EnvironmentInstance) => any): Promise<EnvironmentInstance>;
  links: string;
  /**
   * Access the logs
   */
  logs(): LogListInstance;
  /**
   * remove a EnvironmentInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: EnvironmentInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  uniqueName: string;
  url: string;
  /**
   * Access the variables
   */
  variables(): VariableListInstance;
}


declare class EnvironmentPage extends Page<V1, EnvironmentPayload, EnvironmentResource, EnvironmentInstance> {
  /**
   * Initialize the EnvironmentPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EnvironmentSolution);

  /**
   * Build an instance of EnvironmentInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EnvironmentPayload): EnvironmentInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { EnvironmentContext, EnvironmentInstance, EnvironmentList, EnvironmentListInstance, EnvironmentListInstanceCreateOptions, EnvironmentListInstanceEachOptions, EnvironmentListInstanceOptions, EnvironmentListInstancePageOptions, EnvironmentPage, EnvironmentPayload, EnvironmentResource, EnvironmentSolution }
