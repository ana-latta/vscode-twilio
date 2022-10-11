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

describe('EsimProfile', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.esimProfiles.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/ESimProfiles';

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create_default_smdp response',
    function(done) {
      var body = {
          'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': null,
          'sim_sid': null,
          'status': 'new',
          'eid': '89049032005008882600033489aaaaaa',
          'smdp_plus_address': null,
          'matching_id': null,
          'activation_code': null,
          'error_code': null,
          'error_message': null,
          'date_created': '2020-09-01T20:00:00Z',
          'date_updated': '2020-09-01T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.supersim.v1.esimProfiles.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_activation_code response',
    function(done) {
      var body = {
          'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': null,
          'sim_sid': null,
          'status': 'new',
          'eid': null,
          'smdp_plus_address': null,
          'matching_id': null,
          'activation_code': null,
          'error_code': null,
          'error_message': null,
          'date_created': '2020-09-01T20:00:00Z',
          'date_updated': '2020-09-01T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.supersim.v1.esimProfiles.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_with_callback response',
    function(done) {
      var body = {
          'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': null,
          'sim_sid': null,
          'status': 'reserving',
          'eid': '89049032005008882600033489aaaaaa',
          'smdp_plus_address': null,
          'matching_id': null,
          'activation_code': null,
          'error_code': null,
          'error_message': null,
          'date_created': '2020-09-01T20:00:00Z',
          'date_updated': '2020-09-01T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.supersim.v1.esimProfiles.create();
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

      var promise = client.supersim.v1.esimProfiles('HPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/ESimProfiles/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch_default_smdp response',
    function(done) {
      var body = {
          'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': '8988307aaaaaaaaaaaaa',
          'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'available',
          'eid': '89049032005008882600033489aaaaaa',
          'smdp_plus_address': 'sm-dp-plus.twilio.com',
          'matching_id': null,
          'activation_code': null,
          'error_code': null,
          'error_message': null,
          'date_created': '2020-09-01T20:00:00Z',
          'date_updated': '2020-09-01T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.esimProfiles('HPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch_activation_code response',
    function(done) {
      var body = {
          'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'iccid': '8988307aaaaaaaaaaaaa',
          'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'available',
          'eid': null,
          'smdp_plus_address': 'sm-dp-plus.twilio.com',
          'matching_id': 'AAAAA-BBBBB-CCCCC-DDDDD-EEEEE',
          'activation_code': '1$SM-DP-PLUS.TWILIO.COM$AAAAA-BBBBB-CCCCC-DDDDD-EEEEE',
          'error_code': null,
          'error_message': null,
          'date_created': '2020-09-01T20:00:00Z',
          'date_updated': '2020-09-01T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.esimProfiles('HPXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'available',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.esimProfiles.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'available',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.esimProfiles.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/ESimProfiles',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'available',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0'
          }
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.esimProfiles.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.esimProfiles.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/ESimProfiles';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_all response',
    function(done) {
      var body = {
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'available',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.esimProfiles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_by_eid response',
    function(done) {
      var body = {
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'available',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?Eid=89049032005008882600033489aaaaaa&PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?Eid=89049032005008882600033489aaaaaa&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.esimProfiles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_by_sim_sid response',
    function(done) {
      var body = {
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'available',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?SimSid=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?SimSid=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.esimProfiles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_by_status response',
    function(done) {
      var body = {
          'esim_profiles': [
              {
                  'sid': 'HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'iccid': '8988307aaaaaaaaaaaaa',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'downloaded',
                  'eid': '89049032005008882600033489aaaaaa',
                  'smdp_plus_address': 'sm-dp-plus.twilio.com',
                  'matching_id': null,
                  'activation_code': null,
                  'error_code': null,
                  'error_message': null,
                  'date_created': '2020-09-01T20:00:00Z',
                  'date_updated': '2020-09-01T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/ESimProfiles/HPaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/ESimProfiles?Status=downloaded&PageSize=50&Page=0',
              'key': 'esim_profiles',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/ESimProfiles?Status=downloaded&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.esimProfiles.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
