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
var values = require('../../../../base/values');  /* jshint ignore:line */

var FlowRevisionList;
var FlowRevisionPage;
var FlowRevisionInstance;
var FlowRevisionContext;

/* jshint ignore:start */
/**
 * Initialize the FlowRevisionList
 *
 * @constructor Twilio.Studio.V2.FlowContext.FlowRevisionList
 *
 * @param {Twilio.Studio.V2} version - Version of the resource
 * @param {string} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
FlowRevisionList = function FlowRevisionList(version, sid) {
  /* jshint ignore:start */
  /**
   * @function revisions
   * @memberof Twilio.Studio.V2.FlowContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Studio.V2.FlowContext.FlowRevisionContext}
   */
  /* jshint ignore:end */
  function FlowRevisionListInstance(sid) {
    return FlowRevisionListInstance.get(sid);
  }

  FlowRevisionListInstance._version = version;
  // Path Solution
  FlowRevisionListInstance._solution = {sid: sid};
  FlowRevisionListInstance._uri = `/Flows/${sid}/Revisions`;
  /* jshint ignore:start */
  /**
   * Streams FlowRevisionInstance records from the API.
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
   * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionList#
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
  FlowRevisionListInstance.each = function each(opts, callback) {
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
   * Lists FlowRevisionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionList#
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
  FlowRevisionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of FlowRevisionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionList#
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
  FlowRevisionListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new FlowRevisionPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of FlowRevisionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  FlowRevisionListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new FlowRevisionPage(this._version, payload, this._solution));
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
   * Constructs a flow_revision
   *
   * @function get
   * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionList#
   *
   * @param {string} revision -
   *          Specific Revision number or can be `LatestPublished` and `LatestRevision`
   *
   * @returns {Twilio.Studio.V2.FlowContext.FlowRevisionContext}
   */
  /* jshint ignore:end */
  FlowRevisionListInstance.get = function get(revision) {
    return new FlowRevisionContext(this._version, this._solution.sid, revision);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  FlowRevisionListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  FlowRevisionListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return FlowRevisionListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the FlowRevisionPage
 *
 * @constructor Twilio.Studio.V2.FlowContext.FlowRevisionPage
 *
 * @param {V2} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {FlowRevisionSolution} solution - Path solution
 *
 * @returns FlowRevisionPage
 */
/* jshint ignore:end */
FlowRevisionPage = function FlowRevisionPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(FlowRevisionPage.prototype, Page.prototype);
FlowRevisionPage.prototype.constructor = FlowRevisionPage;

/* jshint ignore:start */
/**
 * Build an instance of FlowRevisionInstance
 *
 * @function getInstance
 * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionPage#
 *
 * @param {FlowRevisionPayload} payload - Payload response from the API
 *
 * @returns FlowRevisionInstance
 */
/* jshint ignore:end */
FlowRevisionPage.prototype.getInstance = function getInstance(payload) {
  return new FlowRevisionInstance(this._version, payload, this._solution.sid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
FlowRevisionPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

FlowRevisionPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the FlowRevisionContext
 *
 * @constructor Twilio.Studio.V2.FlowContext.FlowRevisionInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} friendlyName -
 *          The string that you assigned to describe the Flow
 * @property {object} definition - JSON representation of flow definition
 * @property {flow_revision.status} status - The status of the Flow
 * @property {number} revision -
 *          The latest revision number of the Flow's definition
 * @property {string} commitMessage - Description of change made in the revision
 * @property {boolean} valid - Boolean if the flow definition is valid
 * @property {object} errors - List of error in the flow definition
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} url - The absolute URL of the resource
 *
 * @param {V2} version - Version of the resource
 * @param {FlowRevisionPayload} payload - The instance payload
 * @param {sid} sid - The unique string that identifies the resource
 * @param {string} revision -
 *          Specific Revision number or can be `LatestPublished` and `LatestRevision`
 */
/* jshint ignore:end */
FlowRevisionInstance = function FlowRevisionInstance(version, payload, sid,
                                                      revision) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.definition = payload.definition; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.revision = deserialize.integer(payload.revision); // jshint ignore:line
  this.commitMessage = payload.commit_message; // jshint ignore:line
  this.valid = payload.valid; // jshint ignore:line
  this.errors = payload.errors; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {sid: sid, revision: revision || this.revision, };
};

Object.defineProperty(FlowRevisionInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new FlowRevisionContext(this._version, this._solution.sid, this._solution.revision);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a FlowRevisionInstance
 *
 * @function fetch
 * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FlowRevisionInstance
 */
/* jshint ignore:end */
FlowRevisionInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
FlowRevisionInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

FlowRevisionInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the FlowRevisionContext
 *
 * @constructor Twilio.Studio.V2.FlowContext.FlowRevisionContext
 *
 * @param {V2} version - Version of the resource
 * @param {sid} sid - The SID that identifies the resource to fetch
 * @param {string} revision -
 *          Specific Revision number or can be `LatestPublished` and `LatestRevision`
 */
/* jshint ignore:end */
FlowRevisionContext = function FlowRevisionContext(version, sid, revision) {
  this._version = version;

  // Path Solution
  this._solution = {sid: sid, revision: revision, };
  this._uri = `/Flows/${sid}/Revisions/${revision}`;
};

/* jshint ignore:start */
/**
 * fetch a FlowRevisionInstance
 *
 * @function fetch
 * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed FlowRevisionInstance
 */
/* jshint ignore:end */
FlowRevisionContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new FlowRevisionInstance(
      this._version,
      payload,
      this._solution.sid,
      this._solution.revision
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

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Studio.V2.FlowContext.FlowRevisionContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
FlowRevisionContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

FlowRevisionContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  FlowRevisionList: FlowRevisionList,
  FlowRevisionPage: FlowRevisionPage,
  FlowRevisionInstance: FlowRevisionInstance,
  FlowRevisionContext: FlowRevisionContext
};
