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
var ParticipantList = require('./conference/participant').ParticipantList;
var RecordingList = require('./conference/recording').RecordingList;
var deserialize = require(
    '../../../../base/deserialize');  /* jshint ignore:line */
var serialize = require('../../../../base/serialize');  /* jshint ignore:line */
var values = require('../../../../base/values');  /* jshint ignore:line */

var ConferenceList;
var ConferencePage;
var ConferenceInstance;
var ConferenceContext;

/* jshint ignore:start */
/**
 * Initialize the ConferenceList
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The SID of the Account that created this resource
 */
/* jshint ignore:end */
ConferenceList = function ConferenceList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function conferences
   * @memberof Twilio.Api.V2010.AccountContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext}
   */
  /* jshint ignore:end */
  function ConferenceListInstance(sid) {
    return ConferenceListInstance.get(sid);
  }

  ConferenceListInstance._version = version;
  // Path Solution
  ConferenceListInstance._solution = {accountSid: accountSid};
  ConferenceListInstance._uri = `/Accounts/${accountSid}/Conferences.json`;
  /* jshint ignore:start */
  /**
   * Streams ConferenceInstance records from the API.
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
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList#
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.dateCreatedBefore] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateCreated] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateCreatedAfter] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdatedBefore] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdated] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdatedAfter] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {string} [opts.friendlyName] -
   *          The string that identifies the Conference resources to read
   * @param {conference.status} [opts.status] - The status of the resources to read
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
  ConferenceListInstance.each = function each(opts, callback) {
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
   * Lists ConferenceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList#
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.dateCreatedBefore] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateCreated] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateCreatedAfter] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdatedBefore] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdated] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdatedAfter] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {string} [opts.friendlyName] -
   *          The string that identifies the Conference resources to read
   * @param {conference.status} [opts.status] - The status of the resources to read
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
  ConferenceListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList#
   *
   * @param {object} [opts] - Options for request
   * @param {Date} [opts.dateCreatedBefore] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateCreated] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateCreatedAfter] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdatedBefore] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdated] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {Date} [opts.dateUpdatedAfter] -
   *          The `YYYY-MM-DD` value of the resources to read
   * @param {string} [opts.friendlyName] -
   *          The string that identifies the Conference resources to read
   * @param {conference.status} [opts.status] - The status of the resources to read
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConferenceListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'DateCreated<': serialize.iso8601Date(_.get(opts, 'dateCreatedBefore')),
      'DateCreated': serialize.iso8601Date(_.get(opts, 'dateCreated')),
      'DateCreated>': serialize.iso8601Date(_.get(opts, 'dateCreatedAfter')),
      'DateUpdated<': serialize.iso8601Date(_.get(opts, 'dateUpdatedBefore')),
      'DateUpdated': serialize.iso8601Date(_.get(opts, 'dateUpdated')),
      'DateUpdated>': serialize.iso8601Date(_.get(opts, 'dateUpdatedAfter')),
      'FriendlyName': _.get(opts, 'friendlyName'),
      'Status': _.get(opts, 'status'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new ConferencePage(this._version, payload, this._solution));
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
   * Retrieve a single target page of ConferenceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @function getPage
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList#
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  ConferenceListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new ConferencePage(this._version, payload, this._solution));
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
   * Constructs a conference
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList#
   *
   * @param {string} sid - The unique string that identifies this resource
   *
   * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext}
   */
  /* jshint ignore:end */
  ConferenceListInstance.get = function get(sid) {
    return new ConferenceContext(this._version, this._solution.accountSid, sid);
  };

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.ConferenceList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  ConferenceListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  ConferenceListInstance[util.inspect.custom] = function inspect(depth, options) {
    return util.inspect(this.toJSON(), options);
  };

  return ConferenceListInstance;
};


/* jshint ignore:start */
/**
 * Initialize the ConferencePage
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferencePage
 *
 * @param {V2010} version - Version of the resource
 * @param {Response<string>} response - Response from the API
 * @param {ConferenceSolution} solution - Path solution
 *
 * @returns ConferencePage
 */
/* jshint ignore:end */
ConferencePage = function ConferencePage(version, response, solution) {
  // Path Solution
  this._solution = solution;

  Page.prototype.constructor.call(this, version, response, this._solution);
};

_.extend(ConferencePage.prototype, Page.prototype);
ConferencePage.prototype.constructor = ConferencePage;

/* jshint ignore:start */
/**
 * Build an instance of ConferenceInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.ConferencePage#
 *
 * @param {ConferencePayload} payload - Payload response from the API
 *
 * @returns ConferenceInstance
 */
/* jshint ignore:end */
ConferencePage.prototype.getInstance = function getInstance(payload) {
  return new ConferenceInstance(this._version, payload, this._solution.accountSid);
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConferencePage#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConferencePage.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ConferencePage.prototype[util.inspect.custom] = function inspect(depth, options)
    {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ConferenceContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceInstance
 *
 * @property {string} accountSid -
 *          The SID of the Account that created this resource
 * @property {Date} dateCreated -
 *          The RFC 2822 date and time in GMT that this resource was created
 * @property {Date} dateUpdated -
 *          The RFC 2822 date and time in GMT that this resource was last updated
 * @property {string} apiVersion - The API version used to create this conference
 * @property {string} friendlyName -
 *          A string that you assigned to describe this conference room
 * @property {string} region -
 *          A string that represents the Twilio Region where the conference was mixed
 * @property {string} sid - The unique string that identifies this resource
 * @property {conference.status} status - The status of this conference
 * @property {string} uri -
 *          The URI of this resource, relative to `https://api.twilio.com`
 * @property {string} subresourceUris -
 *          A list of related resources identified by their relative URIs
 * @property {conference.reason_conference_ended} reasonConferenceEnded -
 *          The reason why a conference ended.
 * @property {string} callSidEndingConference -
 *          The call SID that caused the conference to end
 *
 * @param {V2010} version - Version of the resource
 * @param {ConferencePayload} payload - The instance payload
 * @param {sid} accountSid - The SID of the Account that created this resource
 * @param {sid} sid - The unique string that identifies this resource
 */
/* jshint ignore:end */
ConferenceInstance = function ConferenceInstance(version, payload, accountSid,
                                                  sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.region = payload.region; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.status = payload.status; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.subresourceUris = payload.subresource_uris; // jshint ignore:line
  this.reasonConferenceEnded = payload.reason_conference_ended; // jshint ignore:line
  this.callSidEndingConference = payload.call_sid_ending_conference; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {accountSid: accountSid, sid: sid || this.sid, };
};

Object.defineProperty(ConferenceInstance.prototype,
  '_proxy', {
    get: function() {
      if (!this._context) {
        this._context = new ConferenceContext(this._version, this._solution.accountSid, this._solution.sid);
      }

      return this._context;
    }
});

/* jshint ignore:start */
/**
 * fetch a ConferenceInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a ConferenceInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance#
 *
 * @param {object} [opts] - Options for request
 * @param {conference.update_status} [opts.status] - The new status of the resource
 * @param {string} [opts.announceUrl] -
 *          The URL we should call to announce something into the conference
 * @param {string} [opts.announceMethod] - he HTTP method used to call announce_url
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(opts, callback);
};

/* jshint ignore:start */
/**
 * Access the participants
 *
 * @function participants
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance#
 *
 * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList}
 */
/* jshint ignore:end */
ConferenceInstance.prototype.participants = function participants() {
  return this._proxy.participants;
};

/* jshint ignore:start */
/**
 * Access the recordings
 *
 * @function recordings
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance#
 *
 * @returns {Twilio.Api.V2010.AccountContext.ConferenceContext.RecordingList}
 */
/* jshint ignore:end */
ConferenceInstance.prototype.recordings = function recordings() {
  return this._proxy.recordings;
};

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceInstance#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConferenceInstance.prototype.toJSON = function toJSON() {
  let clone = {};
  _.forOwn(this, function(value, key) {
    if (!_.startsWith(key, '_') && ! _.isFunction(value)) {
      clone[key] = value;
    }
  });
  return clone;
};

ConferenceInstance.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};


/* jshint ignore:start */
/**
 * Initialize the ConferenceContext
 *
 * @constructor Twilio.Api.V2010.AccountContext.ConferenceContext
 *
 * @property {Twilio.Api.V2010.AccountContext.ConferenceContext.ParticipantList} participants -
 *          participants resource
 * @property {Twilio.Api.V2010.AccountContext.ConferenceContext.RecordingList} recordings -
 *          recordings resource
 *
 * @param {V2010} version - Version of the resource
 * @param {sid} accountSid -
 *          The SID of the Account that created the resource(s) to fetch
 * @param {sid} sid - The unique string that identifies this resource
 */
/* jshint ignore:end */
ConferenceContext = function ConferenceContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {accountSid: accountSid, sid: sid, };
  this._uri = `/Accounts/${accountSid}/Conferences/${sid}.json`;

  // Dependents
  this._participants = undefined;
  this._recordings = undefined;
};

/* jshint ignore:start */
/**
 * fetch a ConferenceInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext#
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({uri: this._uri, method: 'GET'});

  promise = promise.then(function(payload) {
    deferred.resolve(new ConferenceInstance(
      this._version,
      payload,
      this._solution.accountSid,
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
 * update a ConferenceInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext#
 *
 * @param {object} [opts] - Options for request
 * @param {conference.update_status} [opts.status] - The new status of the resource
 * @param {string} [opts.announceUrl] -
 *          The URL we should call to announce something into the conference
 * @param {string} [opts.announceMethod] - he HTTP method used to call announce_url
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed ConferenceInstance
 */
/* jshint ignore:end */
ConferenceContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'Status': _.get(opts, 'status'),
    'AnnounceUrl': _.get(opts, 'announceUrl'),
    'AnnounceMethod': _.get(opts, 'announceMethod')
  });

  var promise = this._version.update({uri: this._uri, method: 'POST', data: data});

  promise = promise.then(function(payload) {
    deferred.resolve(new ConferenceInstance(
      this._version,
      payload,
      this._solution.accountSid,
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

Object.defineProperty(ConferenceContext.prototype,
  'participants', {
    get: function() {
      if (!this._participants) {
        this._participants = new ParticipantList(
          this._version,
          this._solution.accountSid,
          this._solution.sid
        );
      }
      return this._participants;
    }
});

Object.defineProperty(ConferenceContext.prototype,
  'recordings', {
    get: function() {
      if (!this._recordings) {
        this._recordings = new RecordingList(this._version, this._solution.accountSid, this._solution.sid);
      }
      return this._recordings;
    }
});

/* jshint ignore:start */
/**
 * Provide a user-friendly representation
 *
 * @function toJSON
 * @memberof Twilio.Api.V2010.AccountContext.ConferenceContext#
 *
 * @returns Object
 */
/* jshint ignore:end */
ConferenceContext.prototype.toJSON = function toJSON() {
  return this._solution;
};

ConferenceContext.prototype[util.inspect.custom] = function inspect(depth,
    options) {
  return util.inspect(this.toJSON(), options);
};

module.exports = {
  ConferenceList: ConferenceList,
  ConferencePage: ConferencePage,
  ConferenceInstance: ConferenceInstance,
  ConferenceContext: ConferenceContext
};
