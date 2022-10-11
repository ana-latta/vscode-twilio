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

describe('SmsCommand', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'sim': 'sim', 'payload': 'payload'};
      var promise = client.supersim.v1.smsCommands.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/SmsCommands';

      var values = {'Sim': 'sim', 'Payload': 'payload', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create_command_minimal response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'payload': 'checkin: firmware update',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'queued',
          'direction': 'to_sim',
          'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'sim': 'sim', 'payload': 'payload'};
      var promise = client.supersim.v1.smsCommands.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create_command_full response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'payload': 'Report location: (52.520008, 13.404954)',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'queued',
          'direction': 'to_sim',
          'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'sim': 'sim', 'payload': 'payload'};
      var promise = client.supersim.v1.smsCommands.create(opts);
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

      var promise = client.supersim.v1.smsCommands('HCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'HCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://supersim.twilio.com/v1/SmsCommands/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'payload': 'content of the command',
          'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'queued',
          'direction': 'to_sim',
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z',
          'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.smsCommands('HCXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
              'first_page_url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sms_commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sms_commands': [
              {
                  'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'payload': 'content of the command',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'received',
                  'direction': 'from_sim',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.smsCommands.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sms_commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sms_commands': [
              {
                  'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'payload': 'content of the command',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'received',
                  'direction': 'from_sim',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.smsCommands.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://supersim.twilio.com/v1/SmsCommands',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sms_commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sms_commands': [
              {
                  'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'payload': 'content of the command',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'received',
                  'direction': 'from_sim',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.supersim.v1.smsCommands.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.supersim.v1.smsCommands.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://supersim.twilio.com/v1/SmsCommands';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'sms_commands': [],
          'meta': {
              'first_page_url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sms_commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.smsCommands.list();
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
              'first_page_url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0',
              'key': 'sms_commands',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://supersim.twilio.com/v1/SmsCommands?Status=received&Sim=HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&PageSize=50&Page=0'
          },
          'sms_commands': [
              {
                  'sid': 'HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'payload': 'content of the command',
                  'sim_sid': 'HSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'received',
                  'direction': 'from_sim',
                  'date_created': '2015-07-30T20:00:00Z',
                  'date_updated': '2015-07-30T20:00:00Z',
                  'url': 'https://supersim.twilio.com/v1/SmsCommands/HCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.supersim.v1.smsCommands.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
