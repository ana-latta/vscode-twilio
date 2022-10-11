/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Domain = require('../base/Domain');
import Twilio = require('./Twilio');
import V1 = require('./pricing/V1');
import V2 = require('./pricing/V2');
import { CountryListInstance } from './pricing/v2/country';
import { MessagingListInstance } from './pricing/v1/messaging';
import { NumberListInstance } from './pricing/v2/number';
import { PhoneNumberListInstance } from './pricing/v1/phoneNumber';
import { VoiceListInstance } from './pricing/v2/voice';


declare class Pricing extends Domain {
  /**
   * Initialize pricing domain
   *
   * @param twilio - The twilio client
   */
  constructor(twilio: Twilio);

  readonly countries: CountryListInstance;
  readonly messaging: MessagingListInstance;
  readonly numbers: NumberListInstance;
  readonly phoneNumbers: PhoneNumberListInstance;
  readonly v1: V1;
  readonly v2: V2;
  readonly voice: VoiceListInstance;
}

export = Pricing;