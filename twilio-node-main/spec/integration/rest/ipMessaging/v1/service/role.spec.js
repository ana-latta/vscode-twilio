'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('Role', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://ip-messaging.twilio.com/v1/Services/${serviceSid}/Roles/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'channel user',
          'type': 'channel',
          'permissions': [
              'sendMessage',
              'leaveChannel',
              'editOwnMessage',
              'deleteOwnMessage'
          ],
          'date_created': '2016-03-03T19:47:15Z',
          'date_updated': '2016-03-03T19:47:15Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://ip-messaging.twilio.com/v1/Services/${serviceSid}/Roles/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'friendlyName': 'friendly_name', 'type': 'channel', 'permission': ['permission']};
      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://ip-messaging.twilio.com/v1/Services/${serviceSid}/Roles`;

      var values = {
        'FriendlyName': 'friendly_name',
        'Type': 'channel',
        'Permission': serialize.map(['permission'], function(e) { return e; }),
      };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'channel user',
          'type': 'channel',
          'permissions': [
              'sendMessage',
              'leaveChannel',
              'editOwnMessage',
              'deleteOwnMessage'
          ],
          'date_created': '2016-03-03T19:47:15Z',
          'date_updated': '2016-03-03T19:47:15Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'friendlyName': 'friendly_name', 'type': 'channel', 'permission': ['permission']};
      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': [
              {
                  'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'channel user',
                  'type': 'channel',
                  'permissions': [
                      'sendMessage',
                      'leaveChannel',
                      'editOwnMessage',
                      'deleteOwnMessage'
                  ],
                  'date_created': '2016-03-03T19:47:15Z',
                  'date_updated': '2016-03-03T19:47:15Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .roles.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': [
              {
                  'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'channel user',
                  'type': 'channel',
                  'permissions': [
                      'sendMessage',
                      'leaveChannel',
                      'editOwnMessage',
                      'deleteOwnMessage'
                  ],
                  'date_created': '2016-03-03T19:47:15Z',
                  'date_updated': '2016-03-03T19:47:15Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .roles.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://ip-messaging.twilio.com/v1/Services/${serviceSid}/Roles',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': [
              {
                  'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'channel user',
                  'type': 'channel',
                  'permissions': [
                      'sendMessage',
                      'leaveChannel',
                      'editOwnMessage',
                      'deleteOwnMessage'
                  ],
                  'date_created': '2016-03-03T19:47:15Z',
                  'date_updated': '2016-03-03T19:47:15Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                           .roles.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://ip-messaging.twilio.com/v1/Services/${serviceSid}/Roles`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': [
              {
                  'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'channel user',
                  'type': 'channel',
                  'permissions': [
                      'sendMessage',
                      'leaveChannel',
                      'editOwnMessage',
                      'deleteOwnMessage'
                  ],
                  'date_created': '2016-03-03T19:47:15Z',
                  'date_updated': '2016-03-03T19:47:15Z',
                  'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'roles'
          },
          'roles': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'permission': ['permission']};
      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://ip-messaging.twilio.com/v1/Services/${serviceSid}/Roles/${sid}`;

      var values = {'Permission': serialize.map(['permission'], function(e) { return e; }), };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'sid': 'RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'channel user',
          'type': 'channel',
          'permissions': [
              'sendMessage',
              'leaveChannel',
              'editOwnMessage',
              'deleteOwnMessage'
          ],
          'date_created': '2016-03-03T19:47:15Z',
          'date_updated': '2016-03-03T19:47:15Z',
          'url': 'https://ip-messaging.twilio.com/v1/Services/ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Roles/RLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var opts = {'permission': ['permission']};
      var promise = client.ipMessaging.v1.services('ISXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                         .roles('RLXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});