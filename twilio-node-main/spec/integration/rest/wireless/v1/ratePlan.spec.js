'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('RatePlan', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-07-30T20:00:00Z',
                  'date_updated': '2019-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'national_roaming_data_limit': 1000,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'international_roaming_data_limit': 1000,
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'usage_notification_method': 'POST',
                  'usage_notification_url': 'https://callback.com',
                  'data_limit_strategy': 'block',
                  'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.wireless.v1.ratePlans.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-07-30T20:00:00Z',
                  'date_updated': '2019-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'national_roaming_data_limit': 1000,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'international_roaming_data_limit': 1000,
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'usage_notification_method': 'POST',
                  'usage_notification_url': 'https://callback.com',
                  'data_limit_strategy': 'block',
                  'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.wireless.v1.ratePlans.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://wireless.twilio.com/v1/RatePlans',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-07-30T20:00:00Z',
                  'date_updated': '2019-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'national_roaming_data_limit': 1000,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'international_roaming_data_limit': 1000,
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'usage_notification_method': 'POST',
                  'usage_notification_url': 'https://callback.com',
                  'data_limit_strategy': 'block',
                  'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.wireless.v1.ratePlans.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.wireless.v1.ratePlans.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://wireless.twilio.com/v1/RatePlans';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.wireless.v1.ratePlans.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0',
              'key': 'rate_plans',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://wireless.twilio.com/v1/RatePlans?PageSize=50&Page=0'
          },
          'rate_plans': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'unique_name': 'unique_name',
                  'data_enabled': true,
                  'data_limit': 1000,
                  'data_metering': 'payg',
                  'date_created': '2019-07-30T20:00:00Z',
                  'date_updated': '2019-07-30T20:00:00Z',
                  'friendly_name': 'friendly_name',
                  'messaging_enabled': true,
                  'voice_enabled': true,
                  'national_roaming_enabled': true,
                  'national_roaming_data_limit': 1000,
                  'international_roaming': [
                      'data',
                      'messaging',
                      'voice'
                  ],
                  'international_roaming_data_limit': 1000,
                  'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'usage_notification_method': 'POST',
                  'usage_notification_url': 'https://callback.com',
                  'data_limit_strategy': 'block',
                  'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.wireless.v1.ratePlans.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.wireless.v1.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://wireless.twilio.com/v1/RatePlans/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'payg',
          'date_created': '2019-07-30T20:00:00Z',
          'date_updated': '2019-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'messaging_enabled': true,
          'voice_enabled': true,
          'national_roaming_enabled': true,
          'national_roaming_data_limit': 1000,
          'international_roaming': [
              'data',
              'messaging',
              'voice'
          ],
          'international_roaming_data_limit': 1000,
          'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'usage_notification_method': 'POST',
          'usage_notification_url': 'https://callback.com',
          'data_limit_strategy': 'block',
          'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.wireless.v1.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.wireless.v1.ratePlans.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://wireless.twilio.com/v1/RatePlans';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_limit_strategy': 'block',
          'data_metering': 'payg',
          'date_created': '2019-07-30T20:00:00Z',
          'date_updated': '2019-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'messaging_enabled': true,
          'voice_enabled': true,
          'national_roaming_enabled': true,
          'national_roaming_data_limit': 1000,
          'international_roaming': [
              'data',
              'messaging',
              'voice'
          ],
          'international_roaming_data_limit': 1000,
          'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'usage_notification_method': 'POST',
          'usage_notification_url': 'https://callback.com',
          'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.wireless.v1.ratePlans.create();
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

      var promise = client.wireless.v1.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://wireless.twilio.com/v1/RatePlans/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'unique_name': 'unique_name',
          'data_enabled': true,
          'data_limit': 1000,
          'data_metering': 'payg',
          'date_created': '2019-07-30T20:00:00Z',
          'date_updated': '2019-07-30T20:00:00Z',
          'friendly_name': 'friendly_name',
          'messaging_enabled': true,
          'voice_enabled': true,
          'national_roaming_enabled': true,
          'national_roaming_data_limit': 1000,
          'international_roaming': [
              'data',
              'messaging',
              'voice'
          ],
          'international_roaming_data_limit': 1000,
          'sid': 'WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'usage_notification_method': 'POST',
          'usage_notification_url': 'https://callback.com',
          'data_limit_strategy': 'block',
          'url': 'https://wireless.twilio.com/v1/RatePlans/WPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.wireless.v1.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var promise = client.wireless.v1.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://wireless.twilio.com/v1/RatePlans/${sid}`;

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

      var promise = client.wireless.v1.ratePlans('WPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});