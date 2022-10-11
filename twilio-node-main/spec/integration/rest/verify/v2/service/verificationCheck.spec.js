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


var client;
var holodeck;

describe('VerificationCheck', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verificationChecks.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var serviceSid = 'VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://verify.twilio.com/v2/Services/${serviceSid}/VerificationCheck`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid verification_checks response',
    function(done) {
      var body = {
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sms',
          'status': 'approved',
          'valid': true,
          'amount': null,
          'payee': null,
          'sna_attempts_error_codes': [],
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verificationChecks.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid email_verification_checks response',
    function(done) {
      var body = {
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': 'recipient@foo.com',
          'channel': 'email',
          'status': 'approved',
          'valid': true,
          'amount': null,
          'payee': null,
          'sna_attempts_error_codes': [],
          'date_created': '2020-01-30T20:00:00Z',
          'date_updated': '2020-01-30T20:00:00Z'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verificationChecks.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid sna_verification_checks response',
    function(done) {
      var body = {
          'sid': 'VEaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'service_sid': 'VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'to': '+15017122661',
          'channel': 'sna',
          'status': 'approved',
          'valid': true,
          'amount': null,
          'payee': null,
          'sna_attempts_error_codes': [
              {
                  'attempt_sid': 'VLaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'code': 60001
              }
          ],
          'date_created': '2015-07-30T20:00:00Z',
          'date_updated': '2015-07-30T20:00:00Z'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .verificationChecks.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});