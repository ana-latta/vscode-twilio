'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Domain = require('../base/Domain');  /* jshint ignore:line */
var V1 = require('./insights/V1');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize insights domain
 *
 * @constructor Twilio.Insights
 *
 * @property {Twilio.Insights.V1} v1 - v1 version
 * @property {Twilio.Insights.V1.SettingList} settings - settings resource
 * @property {Twilio.Insights.V1.CallList} calls - calls resource
 * @property {Twilio.Insights.V1.CallSummariesList} callSummaries -
 *          callSummaries resource
 * @property {Twilio.Insights.V1.ConferenceList} conferences - conferences resource
 * @property {Twilio.Insights.V1.RoomList} rooms - rooms resource
 *
 * @param {Twilio} twilio - The twilio client
 */
/* jshint ignore:end */
function Insights(twilio) {
  Domain.prototype.constructor.call(this, twilio, 'https://insights.twilio.com');

  // Versions
  this._v1 = undefined;
}

_.extend(Insights.prototype, Domain.prototype);
Insights.prototype.constructor = Insights;

Object.defineProperty(Insights.prototype,
  'v1', {
    get: function() {
      this._v1 = this._v1 || new V1(this);
      return this._v1;
    }
});

Object.defineProperty(Insights.prototype,
  'settings', {
    get: function() {
      return this.v1.settings;
    }
});

Object.defineProperty(Insights.prototype,
  'calls', {
    get: function() {
      return this.v1.calls;
    }
});

Object.defineProperty(Insights.prototype,
  'callSummaries', {
    get: function() {
      return this.v1.callSummaries;
    }
});

Object.defineProperty(Insights.prototype,
  'conferences', {
    get: function() {
      return this.v1.conferences;
    }
});

Object.defineProperty(Insights.prototype,
  'rooms', {
    get: function() {
      return this.v1.rooms;
    }
});

module.exports = Insights;