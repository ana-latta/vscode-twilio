'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('DeliveryReceipt', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .deliveryReceipts('DYXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var messageSid = 'IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'DYXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Messages/${messageSid}/Receipts/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'failed',
          'error_code': 3000,
          'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2016-03-24T20:37:57Z',
          'date_updated': '2016-03-24T20:37:57Z',
          'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .deliveryReceipts('DYXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'delivery_receipts'
          },
          'delivery_receipts': [
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .deliveryReceipts.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'delivery_receipts'
          },
          'delivery_receipts': [
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .deliveryReceipts.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://conversations.twilio.com/v1/Conversations/${conversationSid}/Messages/${messageSid}/Receipts',
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
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'delivery_receipts'
          },
          'delivery_receipts': [
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                             .deliveryReceipts.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .deliveryReceipts.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var conversationSid = 'CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var messageSid = 'IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Conversations/${conversationSid}/Messages/${messageSid}/Receipts`;

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
              'first_page_url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'delivery_receipts'
          },
          'delivery_receipts': [
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'sid': 'DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'conversation_sid': 'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'message_sid': 'IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'channel_message_sid': 'SMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'failed',
                  'error_code': 3000,
                  'participant_sid': 'MBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': '2016-03-24T20:37:57Z',
                  'date_updated': '2016-03-24T20:37:57Z',
                  'url': 'https://conversations.twilio.com/v1/Conversations/CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Messages/IMaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Receipts/DYaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.conversations('CHXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .messages('IMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                           .deliveryReceipts.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});