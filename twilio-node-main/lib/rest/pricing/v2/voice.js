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
var util = require('util');  /* jshint ignore:line */
var CountryList = require('./voice/country').CountryList;
var NumberList = require('./voice/number').NumberList;
var Page = require('../../../base/Page');  /* jshint ignore:line */

var VoiceList;
var VoicePage;
var VoiceInstance;

/* jshint ignore:start */
/**
 * Initialize the VoiceList
 *
 * @constructor Twilio.Pricing.V2.VoiceList
 *
 * @param {Twilio.Pricing.V2} version - Version of the resource
 */
/* jshint ignore:end */
VoiceList = function VoiceList(version) {
  /* jshint ignore:start */
  /**
   * @function voice
   * @memberof Twilio.Pricing.V2#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Pricing.V2.VoiceContext}
   */
  /* jshint ignore:end */
  function VoiceListInstance(sid) {
    return VoiceListInstance.get(sid);
  }

  VoiceListInstance._version = version;
  // Path Solution
  VoiceListInstance._solution = {};

  // Components
  VoiceListInstance._countries = undefined;
  VoiceListInstance._numbers = undefined;

  Object.defineProperty(VoiceListInstance,
    'countries', {
      get: function countries() {
        if (!this._countries) {
          this._countries = new CountryList(this._version);
        }

        return this._countries;
      }
  });

  Object.defineProperty(VoiceListInstance,
    'numbers', {
      get: function numbers() {
        if (!this._numbers) {
          this._numbers = new NumberList(this._version);
        }

        return this._numbers;
      }
  });

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Pricing.V2.VoiceList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  VoiceListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  VoiceListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return VoiceListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the VoicePage
 *
 * @constructor Twilio.Pricing.V2.VoicePage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {VoiceSolution} solution - Path solution
 *
 * @returns VoicePage
 */
/* jshint ignore:end */
VoicePage = function VoicePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(VoicePage.prototype, Page.prototype);
VoicePage.prototype.constructor = VoicePage;

/* jshint ignore:start */
/**
 * Build an instance of VoiceInstance
 *
 * @function getInstance
 * @memberof Twilio.Pricing.V2.VoicePage#
 *
 * @param {VoicePayload} payload - Payload response from the API
 *
 * @returns VoiceInstance
 */
/* jshint ignore:end */
VoicePage.prototype.getInstance = function getInstance(payload) {
  return new VoiceInstance(this._version, payload);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V2.VoicePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
VoicePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

VoicePage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the VoiceContext
 *
 * @constructor Twilio.Pricing.V2.VoiceInstance
 *
 * @property {string} name - The resource name
 * @property {string} url - The absolute URL of the resource
 * @property {string} links -
 *          The URLs of the related Countries and Numbers resources
 *
 * @param {V2} version - Version of the resource
 * @param {VoicePayload} payload - The instance payload
 */
/* jshint ignore:end */
VoiceInstance = function VoiceInstance(version, payload) {
  this._version = version;

  // Marshaled Properties
  this.name = payload.name; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {};
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Pricing.V2.VoiceInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
VoiceInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

VoiceInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  VoiceList: VoiceList,
  VoicePage: VoicePage,
  VoiceInstance: VoiceInstance
};
