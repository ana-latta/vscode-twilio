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

describe('AddOnResult', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var referenceSid = 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults/${sid}.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'status': 'completed',
          'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
          'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
          'date_completed': 'Wed, 01 Sep 2010 15:15:41 +0000',
          'subresource_uris': {
              'payloads': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'add_on_results': [
              {
                  'sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_completed': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'payloads': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addOnResults.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'add_on_results': [
              {
                  'sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_completed': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'payloads': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addOnResults.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'add_on_results': [
              {
                  'sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_completed': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'payloads': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0'
      };
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .addOnResults.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var referenceSid = 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults.json`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'add_on_results': [
              {
                  'sid': 'XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reference_sid': 'REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'status': 'completed',
                  'add_on_sid': 'XBaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'add_on_configuration_sid': 'XEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'date_created': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_updated': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'date_completed': 'Wed, 01 Sep 2010 15:15:41 +0000',
                  'subresource_uris': {
                      'payloads': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults/XRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Payloads.json'
                  }
              }
          ],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults.list();
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
          'end': 0,
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'add_on_results': [],
          'start': 0,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Recordings/REaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/AddOnResults.json?PageSize=50&Page=0'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults.list();
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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var referenceSid = 'REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Recordings/${referenceSid}/AddOnResults/${sid}.json`;

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

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .recordings('REXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .addOnResults('XRXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});