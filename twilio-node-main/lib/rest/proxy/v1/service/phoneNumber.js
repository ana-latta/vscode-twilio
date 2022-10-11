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

var PhoneNumberList;
var PhoneNumberPage;
var PhoneNumberInstance;
var PhoneNumberContext;

/* jshint ignore:start */
/**
 * Initialize the PhoneNumberList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberList
 *
 * @param {Twilio.Proxy.V1} version - Version of the resource
 * @param {string} serviceSid -
 *          The SID of the PhoneNumber resource's parent Service resource
 */
/* jshint ignore:end */
PhoneNumberList = function PhoneNumberList(version, serviceSid) {
  /* jshint ignore:start */
  /**
   * @function phoneNumbers
   * @memberof Twilio.Proxy.V1.ServiceContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Proxy.V1.ServiceContext.PhoneNumberContext}
   */
  /* jshint ignore:end */
  function PhoneNumberListInstance(sid) {
    return PhoneNumberListInstance.get(sid);
  }

  PhoneNumberListInstance._version = version;
  // Path Solution
  PhoneNumberListInstance._solution = {serviceSid: serviceSid};
  PhoneNumberListInstance._uri = `/Services/${serviceSid}/PhoneNumbers`;
  /* jshint ignore:start */
  /**
   * create a PhoneNumberInstance
   *
   * @function create
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
   *
   * @param {object} [opts] - Options for request
   * @param {string} [opts.sid] - The SID of a Twilio IncomingPhoneNumber resource
   * @param {string} [opts.phoneNumber] - The phone number in E.164 format
   * @param {boolean} [opts.isReserved] -
   *          Whether the new phone number should be reserved
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed PhoneNumberInstance
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Sid': _.get(opts, 'sid'),
      'PhoneNumber': _.get(opts, 'phoneNumber'),
      'IsReserved': serialize.bool(_.get(opts, 'isReserved'))
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberInstance(
        this._version,
        payload,
        this._solution.serviceSid,
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

  /* jshint ignore:start */
  /**
   * Streams PhoneNumberInstance records from the API.
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
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
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
  PhoneNumberListInstance.each = function each(opts, callback) {
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
   * Lists PhoneNumberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
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
  PhoneNumberListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
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
  PhoneNumberListInstance.page = function page(opts, callback) {
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
      deferred.resolve(new PhoneNumberPage(this._version, payload, this._solution));
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
   * Retrieve a single target page of PhoneNumberInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new PhoneNumberPage(this._version, payload, this._solution));
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
   * Constructs a phone_number
   *
   * @function get
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
   *
   * @param {string} sid - The unique string that identifies the resource
   *
   * @returns {Twilio.Proxy.V1.ServiceContext.PhoneNumberContext}
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.get = function get(sid) {
    return new PhoneNumberContext(this._version, this._solution.serviceSid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  PhoneNumberListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  PhoneNumberListInstance[util.inspect.custom] = function inspect(depth, options)
      {
    return util.inspect(this.toJSON(), options);
  };

  return PhoneNumberListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberPage
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberPage
 *
 * @param {V1} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {PhoneNumberSolution} solution - Path solution
 *
 * @returns PhoneNumberPage
 */
/* jshint ignore:end */
PhoneNumberPage = function PhoneNumberPage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(PhoneNumberPage.prototype, Page.prototype);
PhoneNumberPage.prototype.constructor = PhoneNumberPage;

/* jshint ignore:start */
/**
 * Build an instance of PhoneNumberInstance
 *
 * @function getInstance
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberPage#
 *
 * @param {PhoneNumberPayload} payload - Payload response from the API
 *
 * @returns PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.getInstance = function getInstance(payload) {
  return new PhoneNumberInstance(this._version, payload, this._solution.serviceSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberPage#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberPage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberPage.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance
 *
 * @property {string} sid - The unique string that identifies the resource
 * @property {string} accountSid - The SID of the Account that created the resource
 * @property {string} serviceSid -
 *          The SID of the PhoneNumber resource's parent Service resource
 * @property {Date} dateCreated -
 *          The ISO 8601 date and time in GMT when the resource was created
 * @property {Date} dateUpdated -
 *          The ISO 8601 date and time in GMT when the resource was last updated
 * @property {string} phoneNumber - The phone number in E.164 format
 * @property {string} friendlyName -
 *          The string that you assigned to describe the resource
 * @property {string} isoCountry - The ISO Country Code
 * @property {PhoneNumberCapabilities} capabilities -
 *          The capabilities of the phone number
 * @property {string} url - The absolute URL of the PhoneNumber resource
 * @property {boolean} isReserved -
 *          Reserve the phone number for manual assignment to participants only
 * @property {number} inUse - The number of open session assigned to the number.
 *
 * @param {V1} version - Version of the resource
 * @param {PhoneNumberPayload} payload - The instance payload
 * @param {sid} serviceSid -
 *          The SID of the PhoneNumber resource's parent Service resource
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
PhoneNumberInstance = function PhoneNumberInstance(version, payload, serviceSid,
                                                    sid) {
  this._version = version;

  // Marshaled Properties
  this.sid = payload.sid; // jshint ignore:line
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.serviceSid = payload.service_sid; // jshint ignore:line
  this.dateCreated = deserialize.iso8601DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated); // jshint ignore:line
  this.phoneNumber = payload.phone_number; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.isoCountry = payload.iso_country; // jshint ignore:line
  this.capabilities = payload.capabilities; // jshint ignore:line
  this.url = payload.url; // jshint ignore:line
  this.isReserved = payload.is_reserved; // jshint ignore:line
  this.inUse = deserialize.integer(payload.in_use); // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {serviceSid: serviceSid, sid: sid || this.sid, };
};

Object.defineProperty(PhoneNumberInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new PhoneNumberContext(
          this._version,
          this._solution.serviceSid,
          this._solution.sid
        );
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * remove a PhoneNumberInstance
 *
 * @function remove
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};

/* jshint ignore:start */
/**
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a PhoneNumberInstance
 *
 * @function update
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {boolean} [opts.isReserved] -
 *          Whether the new phone number should be reserved
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

PhoneNumberInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the PhoneNumberContext
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @constructor Twilio.Proxy.V1.ServiceContext.PhoneNumberContext
 *
 * @param {V1} version - Version of the resource
 * @param {sid} serviceSid -
 *          The SID of the parent Service resource of the PhoneNumber resource to fetch
 * @param {sid} sid - The unique string that identifies the resource
 */
/* jshint ignore:end */
PhoneNumberContext = function PhoneNumberContext(version, serviceSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {serviceSid: serviceSid, sid: sid, };
  this._uri = `/Services/${serviceSid}/PhoneNumbers/${sid}`;
};

/* jshint ignore:start */
/**
 * remove a PhoneNumberInstance
 *
 * @function remove
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({uri: this._uri, method: 'DELETE'});

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
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
 * fetch a PhoneNumberInstance
 *
 * @function fetch
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.serviceSid,
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

/* jshint ignore:start */
/**
 * update a PhoneNumberInstance
 *
 * @function update
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberContext#
 *
 * @param {object} [opts] - Options for request
 * @param {boolean} [opts.isReserved] -
 *          Whether the new phone number should be reserved
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed PhoneNumberInstance
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({'IsReserved': serialize.bool(_.get(opts, 'isReserved'))});

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new PhoneNumberInstance(
      this._version,
      payload,
      this._solution.serviceSid,
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

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Proxy.V1.ServiceContext.PhoneNumberContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
PhoneNumberContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

PhoneNumberContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  PhoneNumberList: PhoneNumberList,
  PhoneNumberPage: PhoneNumberPage,
  PhoneNumberInstance: PhoneNumberInstance,
  PhoneNumberContext: PhoneNumberContext
};