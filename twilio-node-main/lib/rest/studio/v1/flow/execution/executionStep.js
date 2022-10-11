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
var ExecutionStepContextList = require(
    './executionStep/executionStepContext').ExecutionStepContextList;
var Page = require('../../../../../base/Page');  /* jshint ignore:line */
var deserialize = require(
    '../../../../../base/deserialize');  /* jshint ignore:line */
var values = require('../../../../../base/values');  /* jshint ignore:line */

var ExecutionStepList;
var ExecutionStepPage;
var ExecutionStepInstance;
var ExecutionStepContext;

/* jshint ignore:start */
/**
 * Initialize the ExecutionStepList
 *
 * @constructor Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList
 *
 * @param {Twilio.Studio.V1} version - Version of the resource
 * @param {string} flowSid - The SID of the Flow
 * @param {string} executionSid - The SID of the Execution
 */
/* jshint ignore:end */
ExecutionStepList = function ExecutionStepList(version, flowSid, executionSid) {
  /* jshint ignore:start */
  /**
   * @function steps
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext}
   */
  /* jshint ignore:end */
  function ExecutionStepListInstance(sid) {
    return ExecutionStepListInstance.get(sid);
  }

  ExecutionStepListInstance._version = version;
  // Path Solution
  ExecutionStepListInstance._solution = {flowSid: flowSid, executionSid: executionSid};
  ExecutionStepListInstance._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps`;
  /* jshint ignore:start */
  /**
   * Streams ExecutionStepInstance records from the API.
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
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList#
   *
   * @param {object} [opts] - Options for request
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
  ExecutionStepListInstance.each = function each(opts, callback) {
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
   * Lists ExecutionStepInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList#
   *
   * @param {object} [opts] - Options for request
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
  ExecutionStepListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ExecutionStepListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ExecutionStepPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ExecutionStepInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ExecutionStepListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ExecutionStepPage(this._version, payload, this._solution));
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
   * Constructs a execution_step
   *
   * @function get
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext}
   */
  /* jshint ignore:end */
  ExecutionStepListInstance.get = function get(sid) {
    return new ExecutionStepContext(
      this._version,
      this._solution.flowSid,
      this._solution.executionSid,
      sid
    );
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ExecutionStepListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ExecutionStepListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return ExecutionStepListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ExecutionStepPage
 *
 * @constructor Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ExecutionStepSolution} solution - Path solution
 *
 * @returns ExecutionStepPage
 */
/* jshint ignore:end */
ExecutionStepPage = function ExecutionStepPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ExecutionStepPage.prototype, Page.prototype);
ExecutionStepPage.prototype.constructor = ExecutionStepPage;

/* jshint ignore:start */
/**
 * Build an instance of ExecutionStepInstance
 *
 * @function getInstance
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepPage#
 *
 * @param {ExecutionStepPayload} payload - Payload response from the API
 *
 * @returns ExecutionStepInstance
 */
/* jshint ignore:end */
ExecutionStepPage.prototype.getInstance = function getInstance(payload) {
  return new ExecutionStepInstance(
    this._version,
    payload,
    this._solution.flowSid,
    this._solution.executionSid
  );
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExecutionStepPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExecutionStepPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExecutionStepContext
 *
 * @constructor Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} flowSid - The SID of the Flow
 * @property {string} executionSid - The SID of the Execution
 * @property {string} name -
 *          The event that caused the Flow to transition to the Step
 * @property {object} context - The current state of the flow
 * @property {string} transitionedFrom -
 *          The Widget that preceded the Widget for the Step
 * @property {string} transitionedTo -
 *          The Widget that will follow the Widget for the Step
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the resource
 * @property {string} links - The URLs of related resources
 *
 * @param {V1} version - Version of the resource
 * @param {ExecutionStepPayload} payload - The instance payload
 * @param {sid} flowSid - The SID of the Flow
 * @param {sid} executionSid - The SID of the Execution
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ExecutionStepInstance = function ExecutionStepInstance(version, payload,
                                                        flowSid, executionSid,
                                                        sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.flowSid = payload.flow_sid; // jshint ignore:line
  this.executionSid = payload.execution_sid; // jshint ignore:line
  this.name = payload.name; // jshint ignore:line
  this.context = payload.context; // jshint ignore:line
  this.transitionedFrom = payload.transitioned_from; // jshint ignore:line
  this.transitionedTo = payload.transitioned_to; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.links = payload.links; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {flowSid: flowSid, executionSid: executionSid, sid: sid || this.sid, };
};

Object.defineProperty(ExecutionStepInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ExecutionStepContext(
          this._version,
          this._solution.flowSid,
          this._solution.executionSid,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ExecutionStepInstance
 *
 * @function fetch
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExecutionStepInstance
 */
/* jshint ignore:end */
ExecutionStepInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Access the stepContext
 *
 * @function stepContext
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepInstance#
 *
 * @returns {Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext.ExecutionStepContextList}
 */
/* jshint ignore:end */
ExecutionStepInstance.prototype.stepContext = function stepContext() {
  return this._proxy.stepContext;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExecutionStepInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ExecutionStepInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ExecutionStepContext
 *
 * @constructor Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext
 *
 * @property {Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext.ExecutionStepContextList} stepContext -
 *          stepContext resource
 *
 * @param {V1} version - Version of the resource
 * @param {sid} flowSid - The SID of the Flow
 * @param {sid} executionSid - The SID of the Execution
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
ExecutionStepContext = function ExecutionStepContext(version, flowSid,
                                                      executionSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {flowSid: flowSid, executionSid: executionSid, sid: sid, };
  this._uri = `/Flows/${flowSid}/Executions/${executionSid}/Steps/${sid}`;

  // Dependents
  this._stepContext = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ExecutionStepInstance
 *
 * @function fetch
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ExecutionStepInstance
 */
/* jshint ignore:end */
ExecutionStepContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ExecutionStepInstance(
      this._version,
      payload,
      this._solution.flowSid,
      this._solution.executionSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

Object.defineProperty(ExecutionStepContext.prototype,
  'stepContext', {
    get: function() {
      if (!this._stepContext) {
        this._stepContext = new ExecutionStepContextList(
          this._version,
          this._solution.flowSid,
          this._solution.executionSid,
          this._solution.sid
        );
      }
      return this._stepContext;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Studio.V1.FlowContext.ExecutionContext.ExecutionStepContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ExecutionStepContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ExecutionStepContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ExecutionStepList: ExecutionStepList,
  ExecutionStepPage: ExecutionStepPage,
  ExecutionStepInstance: ExecutionStepInstance,
  ExecutionStepContext: ExecutionStepContext
};
