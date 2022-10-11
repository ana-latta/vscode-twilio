/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V2 = require('../../../../V2');
import { SerializableClass } from '../../../../../../interfaces';

/**
 * Initialize the NotificationList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param identity - Unique external identifier of the Entity
 * @param challengeSid - Challenge Sid.
 */
declare function NotificationList(version: V2, serviceSid: string, identity: string, challengeSid: string): NotificationListInstance;

interface NotificationListInstance {
  /**
   * create a NotificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: NotificationInstance) => any): Promise<NotificationInstance>;
  /**
   * create a NotificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: NotificationListInstanceCreateOptions, callback?: (error: Error | null, item: NotificationInstance) => any): Promise<NotificationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property ttl - How long, in seconds, the notification is valid.
 */
interface NotificationListInstanceCreateOptions {
  ttl?: number;
}

interface NotificationPayload extends NotificationResource, Page.TwilioResponsePayload {
}

interface NotificationResource {
  account_sid: string;
  challenge_sid: string;
  date_created: Date;
  entity_sid: string;
  identity: string;
  priority: string;
  service_sid: string;
  sid: string;
  ttl: number;
}

interface NotificationSolution {
  challengeSid?: string;
  identity?: string;
  serviceSid?: string;
}


declare class NotificationInstance extends SerializableClass {
  /**
   * Initialize the NotificationContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param identity - Unique external identifier of the Entity
   * @param challengeSid - Challenge Sid.
   */
  constructor(version: V2, payload: NotificationPayload, serviceSid: string, identity: string, challengeSid: string);

  accountSid: string;
  challengeSid: string;
  dateCreated: Date;
  entitySid: string;
  identity: string;
  priority: string;
  serviceSid: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  ttl: number;
}


declare class NotificationPage extends Page<V2, NotificationPayload, NotificationResource, NotificationInstance> {
  /**
   * Initialize the NotificationPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: NotificationSolution);

  /**
   * Build an instance of NotificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: NotificationPayload): NotificationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { NotificationInstance, NotificationList, NotificationListInstance, NotificationListInstanceCreateOptions, NotificationPage, NotificationPayload, NotificationResource, NotificationSolution }
