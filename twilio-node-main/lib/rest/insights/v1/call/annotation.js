'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Q = require('q');  /* jshint ignore:line */
var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var Page = require('../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var AnnotationList;
var AnnotationPage;
var AnnotationInstance;
var AnnotationContext;

/* jshint ignore:start */
/**
 * Initialize the AnnotationList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Insights.V1.CallContext.AnnotationList
 *
 * @param {Twilio.Insights.V1} version - Version of the resource
 * @param {string} callSid - Call SID.
 */
/* jshint ignore:end */
AnnotationList = function AnnotationList(version, callSid) {
  /* jshint ignore:start */
  /**
   * @function annotation
   * @memberof Twilio.Insights.V1.CallContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Insights.V1.CallContext.AnnotationContext}
   */
  /* jshint ignore:end */
  function AnnotationListInstance(sid) {
    return AnnotationListInstance.get(sid);
  }

  AnnotationListInstance._version = version;
  // Path Solution
  AnnotationListInstance._solution = {callSid: callSid};
  /* jshint ignore:start */
  /**
   * Constructs a annotation
   *
   * @function get
   * @memberof Twilio.Insights.V1.CallContext.AnnotationList#
   *
   * @returns {Twilio.Insights.V1.CallContext.AnnotationContext}
   */
  /* jshint ignore:end */
  AnnotationListInstance.get = function get() {
    return new AnnotationContext(this._version, this._solution.callSid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Insights.V1.CallContext.AnnotationList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  AnnotationListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  AnnotationListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return AnnotationListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the AnnotationPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Insights.V1.CallContext.AnnotationPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {AnnotationSolution} solution - Path solution
 *
 * @returns AnnotationPage
 */
/* jshint ignore:end */
AnnotationPage = function AnnotationPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(AnnotationPage.prototype, Page.prototype);
AnnotationPage.prototype.constructor = AnnotationPage;

/* jshint ignore:start */
/**
 * Build an instance of AnnotationInstance
 *
 * @function getInstance
 * @memberof Twilio.Insights.V1.CallContext.AnnotationPage#
 *
 * @param {AnnotationPayload} payload - Payload response from the API
 *
 * @returns AnnotationInstance
 */
/* jshint ignore:end */
AnnotationPage.prototype.getInstance = function getInstance(payload) {
  return new AnnotationInstance(this._version, payload, this._solution.callSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallContext.AnnotationPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
AnnotationPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AnnotationPage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AnnotationContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Insights.V1.CallContext.AnnotationInstance
 *
 * @property {string} callSid - Call SID.
 * @property {string} accountSid - Account SID.
 * @property {annotation.answered_by} answeredBy -
 *          Indicates the answering entity as determined by Answering Machine Detection.
 * @property {annotation.connectivity_issue} connectivityIssue -
 *          Indicates if the call had any connectivity issue
 * @property {string} qualityIssues -
 *          Indicates if the call had audio quality issues.
 * @property {boolean} spam - Call spam indicator
 * @property {number} callScore - Call Score
 * @property {string} comment - User comments
 * @property {string} incident - Call tag for incidents or support ticket
 * @property {string} url - The URL of this resource.
 *
 * @param {V1} version - Version of the resource
 * @param {AnnotationPayload} payload - The instance payload
 * @param {sid} callSid - Call SID.
 */
/* jshint ignore:end */
AnnotationInstance = function AnnotationInstance(version, payload, callSid) {
  this._version = version;

  // Marshaled Properties
  this.callSid = payload.call_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.answeredBy = payload.answered_by; // jshint ignore:line
  this.connectivityIssue = payload.connectivity_issue; // jshint ignore:line
  this.qualityIssues = payload.quality_issues; // jshint ignore:line
  this.spam = payload.spam; // jshint ignore:line
  this.callScore = deserialize.integer(payload.call_score); // jshint ignore:line
  this.comment = payload.comment; // jshint ignore:line
  this.incident = payload.incident; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {callSid: callSid, };
};

Object.defineProperty(AnnotationInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new AnnotationContext(this._version, this._solution.callSid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * update a AnnotationInstance
 *
 * @function update
 * @memberof Twilio.Insights.V1.CallContext.AnnotationInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {annotation.answered_by} [opts.answeredBy] -
 *          Indicates the answering entity as determined by Answering Machine Detection.
 * @param {annotation.connectivity_issue} [opts.connectivityIssue] -
 *          Indicates if the call had any connectivity issue
 * @param {string} [opts.qualityIssues] -
 *          Indicates if the call had audio quality issues.
 * @param {boolean} [opts.spam] - Call spam indicator
 * @param {number} [opts.callScore] - Call Score
 * @param {string} [opts.comment] - User comments
 * @param {string} [opts.incident] - Call tag for incidents or support ticket
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AnnotationInstance
 */
/* jshint ignore:end */
AnnotationInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * fetch a AnnotationInstance
 *
 * @function fetch
 * @memberof Twilio.Insights.V1.CallContext.AnnotationInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AnnotationInstance
 */
/* jshint ignore:end */
AnnotationInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallContext.AnnotationInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
AnnotationInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

AnnotationInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the AnnotationContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Insights.V1.CallContext.AnnotationContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} callSid - Call SID.
 */
/* jshint ignore:end */
AnnotationContext = function AnnotationContext(version, callSid) {
  this._version = version;

  // Path Solution
  this._solution = {callSid: callSid, };
  this._uri = `/Voice/${callSid}/Annotation`;
};

/* jshint ignore:start */
/**
 * update a AnnotationInstance
 *
 * @function update
 * @memberof Twilio.Insights.V1.CallContext.AnnotationContext#
 *
 * @param {object} [opts] - Options for request
 * @param {annotation.answered_by} [opts.answeredBy] -
 *          Indicates the answering entity as determined by Answering Machine Detection.
 * @param {annotation.connectivity_issue} [opts.connectivityIssue] -
 *          Indicates if the call had any connectivity issue
 * @param {string} [opts.qualityIssues] -
 *          Indicates if the call had audio quality issues.
 * @param {boolean} [opts.spam] - Call spam indicator
 * @param {number} [opts.callScore] - Call Score
 * @param {string} [opts.comment] - User comments
 * @param {string} [opts.incident] - Call tag for incidents or support ticket
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AnnotationInstance
 */
/* jshint ignore:end */
AnnotationContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'AnsweredBy': _.get(opts, 'answeredBy'),
    'ConnectivityIssue': _.get(opts, 'connectivityIssue'),
    'QualityIssues': _.get(opts, 'qualityIssues'),
    'Spam': serialize.bool(_.get(opts, 'spam')),
    'CallScore': _.get(opts, 'callScore'),
    'Comment': _.get(opts, 'comment'),
    'Incident': _.get(opts, 'incident')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new AnnotationInstance(this._version, payload, this._solution.callSid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * fetch a AnnotationInstance
 *
 * @function fetch
 * @memberof Twilio.Insights.V1.CallContext.AnnotationContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed AnnotationInstance
 */
/* jshint ignore:end */
AnnotationContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new AnnotationInstance(this._version, payload, this._solution.callSid));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallContext.AnnotationContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
AnnotationContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

AnnotationContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  AnnotationList: AnnotationList,
  AnnotationPage: AnnotationPage,
  AnnotationInstance: AnnotationInstance,
  AnnotationContext: AnnotationContext
};
