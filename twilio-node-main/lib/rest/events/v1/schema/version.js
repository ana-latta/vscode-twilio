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

var SchemaVersionList;
var SchemaVersionPage;
var SchemaVersionInstance;
var SchemaVersionContext;

/* jshint ignore:start */
/**
 * Initialize the SchemaVersionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Events.V1.SchemaContext.SchemaVersionList
 *
 * @param {Twilio.Events.V1} version - Version of the resource
 * @param {string} id - The unique identifier of the schema.
 */
/* jshint ignore:end */
SchemaVersionList = function SchemaVersionList(version, id) {
  /* jshint ignore:start */
  /**
   * @function versions
   * @memberof Twilio.Events.V1.SchemaContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Events.V1.SchemaContext.SchemaVersionContext}
   */
  /* jshint ignore:end */
  function SchemaVersionListInstance(sid) {
    return SchemaVersionListInstance.get(sid);
  }

  SchemaVersionListInstance._version = version;
  // Path Solution
  SchemaVersionListInstance._solution = {id: id};
  SchemaVersionListInstance._uri = `/Schemas/${id}/Versions`;
  /* jshint ignore:start */
  /**
   * Streams SchemaVersionInstance records from the API.
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
   * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionList#
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
  SchemaVersionListInstance.each = function each(opts, callback) {
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
   * Lists SchemaVersionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionList#
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
  SchemaVersionListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionList#
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
  SchemaVersionListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new SchemaVersionPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of SchemaVersionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  SchemaVersionListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new SchemaVersionPage(this._version, payload, this._solution));
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
   * Constructs a schema_version
   *
   * @function get
   * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionList#
   *
   * @param {string} schemaVersion - The version of the schema
   *
   * @returns {Twilio.Events.V1.SchemaContext.SchemaVersionContext}
   */
  /* jshint ignore:end */
  SchemaVersionListInstance.get = function get(schemaVersion) {
    return new SchemaVersionContext(this._version, this._solution.id, schemaVersion);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  SchemaVersionListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  SchemaVersionListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return SchemaVersionListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the SchemaVersionPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Events.V1.SchemaContext.SchemaVersionPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {SchemaVersionSolution} solution - Path solution
 *
 * @returns SchemaVersionPage
 */
/* jshint ignore:end */
SchemaVersionPage = function SchemaVersionPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(SchemaVersionPage.prototype, Page.prototype);
SchemaVersionPage.prototype.constructor = SchemaVersionPage;

/* jshint ignore:start */
/**
 * Build an instance of SchemaVersionInstance
 *
 * @function getInstance
 * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionPage#
 *
 * @param {SchemaVersionPayload} payload - Payload response from the API
 *
 * @returns SchemaVersionInstance
 */
/* jshint ignore:end */
SchemaVersionPage.prototype.getInstance = function getInstance(payload) {
  return new SchemaVersionInstance(this._version, payload, this._solution.id);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
SchemaVersionPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

SchemaVersionPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the SchemaVersionContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Events.V1.SchemaContext.SchemaVersionInstance
 *
 * @property {string} id - The unique identifier of the schema.
 * @property {number} schemaVersion - The version of this schema.
 * @property {Date} dateCreated - The date the schema version was created.
 * @property {string} url - The URL of this resource.
 * @property {string} raw - The raw
 *
 * @param {V1} version - Version of the resource
 * @param {SchemaVersionPayload} payload - The instance payload
 * @param {string} id - The unique identifier of the schema.
 * @param {integer} schemaVersion - The version of the schema
 */
/* jshint ignore:end */
SchemaVersionInstance = function SchemaVersionInstance(version, payload, id,
                                                        schemaVersion) {
  this._version = version;

  // Marshaled Properties
  this.id = payload.id; // jshint ignore:line
  this.schemaVersion = deserialize.integer(payload.schema_version); // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.raw = payload.raw; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {id: id, schemaVersion: schemaVersion || this.schemaVersion, };
};

Object.defineProperty(SchemaVersionInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new SchemaVersionContext(
          this._version,
          this._solution.id,
          this._solution.schemaVersion
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a SchemaVersionInstance
 *
 * @function fetch
 * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SchemaVersionInstance
 */
/* jshint ignore:end */
SchemaVersionInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
SchemaVersionInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

SchemaVersionInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the SchemaVersionContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Events.V1.SchemaContext.SchemaVersionContext
 *
 * @param {V1} version - Version of the resource
 * @param {string} id - The unique identifier of the schema.
 * @param {integer} schemaVersion - The version of the schema
 */
/* jshint ignore:end */
SchemaVersionContext = function SchemaVersionContext(version, id, schemaVersion)
                                                      {
  this._version = version;

  // Path Solution
  this._solution = {id: id, schemaVersion: schemaVersion, };
  this._uri = `/Schemas/${id}/Versions/${schemaVersion}`;
};

/* jshint ignore:start */
/**
 * fetch a SchemaVersionInstance
 *
 * @function fetch
 * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed SchemaVersionInstance
 */
/* jshint ignore:end */
SchemaVersionContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new SchemaVersionInstance(
      this._version,
      payload,
      this._solution.id,
      this._solution.schemaVersion
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
 * @memberof Twilio.Events.V1.SchemaContext.SchemaVersionContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
SchemaVersionContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

SchemaVersionContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  SchemaVersionList: SchemaVersionList,
  SchemaVersionPage: SchemaVersionPage,
  SchemaVersionInstance: SchemaVersionInstance,
  SchemaVersionContext: SchemaVersionContext
};