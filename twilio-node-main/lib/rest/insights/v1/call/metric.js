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
var values = require('../../../../base/values');  /* jshint ignore:line */

var MetricList;
var MetricPage;
var MetricInstance;

/* jshint ignore:start */
/**
 * Initialize the MetricList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallContext.MetricList
 *
 * @param {Twilio.Insights.V1} version - Version of the resource
 * @param {string} callSid - The call_sid
 */
/* jshint ignore:end */
MetricList = function MetricList(version, callSid) {
  /* jshint ignore:start */
  /**
   * @function metrics
   * @memberof Twilio.Insights.V1.CallContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Insights.V1.CallContext.MetricContext}
   */
  /* jshint ignore:end */
  function MetricListInstance(sid) {
    return MetricListInstance.get(sid);
  }

  MetricListInstance._version = version;
  // Path Solution
  MetricListInstance._solution = {callSid: callSid};
  MetricListInstance._uri = `/Voice/${callSid}/Metrics`;
  /* jshint ignore:start */
  /**
   * Streams MetricInstance records from the API.
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
   * @function each
   * @memberof Twilio.Insights.V1.CallContext.MetricList#
   *
   * @param {object} [opts] - Options for request
   * @param {metric.twilio_edge} [opts.edge] - The edge
   * @param {metric.stream_direction} [opts.direction] - The direction
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  MetricListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        } else {
          onComplete();
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };

  /* jshint ignore:start */
  /**
   * Lists MetricInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Insights.V1.CallContext.MetricList#
   *
   * @param {object} [opts] - Options for request
   * @param {metric.twilio_edge} [opts.edge] - The edge
   * @param {metric.stream_direction} [opts.direction] - The direction
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MetricListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Insights.V1.CallContext.MetricList#
   *
   * @param {object} [opts] - Options for request
   * @param {metric.twilio_edge} [opts.edge] - The edge
   * @param {metric.stream_direction} [opts.direction] - The direction
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MetricListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Edge': _.get(opts, 'edge'),
      'Direction': _.get(opts, 'direction'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MetricPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of MetricInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Insights.V1.CallContext.MetricList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MetricListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new MetricPage(this._version, payload, this._solution));
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
   * @memberof Twilio.Insights.V1.CallContext.MetricList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  MetricListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  MetricListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return MetricListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the MetricPage
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallContext.MetricPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {MetricSolution} solution - Path solution
 *
 * @returns MetricPage
 */
/* jshint ignore:end */
MetricPage = function MetricPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(MetricPage.prototype, Page.prototype);
MetricPage.prototype.constructor = MetricPage;

/* jshint ignore:start */
/**
 * Build an instance of MetricInstance
 *
 * @function getInstance
 * @memberof Twilio.Insights.V1.CallContext.MetricPage#
 *
 * @param {MetricPayload} payload - Payload response from the API
 *
 * @returns MetricInstance
 */
/* jshint ignore:end */
MetricPage.prototype.getInstance = function getInstance(payload) {
  return new MetricInstance(this._version, payload, this._solution.callSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallContext.MetricPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
MetricPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

MetricPage.prototype[util.inspect.custom] = function inspect(depth, options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the MetricContext
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @constructor Twilio.Insights.V1.CallContext.MetricInstance
 *
 * @property {string} timestamp - The timestamp
 * @property {string} callSid - The call_sid
 * @property {string} accountSid - The account_sid
 * @property {metric.twilio_edge} edge - The edge
 * @property {metric.stream_direction} direction - The direction
 * @property {object} carrierEdge - The carrier_edge
 * @property {object} sipEdge - The sip_edge
 * @property {object} sdkEdge - The sdk_edge
 * @property {object} clientEdge - The client_edge
 *
 * @param {V1} version - Version of the resource
 * @param {MetricPayload} payload - The instance payload
 * @param {sid} callSid - The call_sid
 */
/* jshint ignore:end */
MetricInstance = function MetricInstance(version, payload, callSid) {
  this._version = version;

  // Marshaled Properties
  this.timestamp = payload.timestamp; // jshint ignore:line
  this.callSid = payload.call_sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.edge = payload.edge; // jshint ignore:line
  this.direction = payload.direction; // jshint ignore:line
  this.carrierEdge = payload.carrier_edge; // jshint ignore:line
  this.sipEdge = payload.sip_edge; // jshint ignore:line
  this.sdkEdge = payload.sdk_edge; // jshint ignore:line
  this.clientEdge = payload.client_edge; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {callSid: callSid, };
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Insights.V1.CallContext.MetricInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
MetricInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

MetricInstance.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  MetricList: MetricList,
  MetricPage: MetricPage,
  MetricInstance: MetricInstance
};
