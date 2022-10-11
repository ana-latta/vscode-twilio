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

describe('CompositionSettings', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.video.v1.compositionSettings().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://video.twilio.com/v1/CompositionSettings/Default';

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
          'friendly_name': 'string',
          'aws_credentials_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'encryption_key_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'aws_s3_url': 'https://www.twilio.com',
          'aws_storage_enabled': true,
          'encryption_enabled': true,
          'url': 'https://video.twilio.com/v1/CompositionSettings/Default'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.video.v1.compositionSettings().fetch();
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

      var opts = {'friendlyName': 'friendly_name'};
      var promise = client.video.v1.compositionSettings().create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://video.twilio.com/v1/CompositionSettings/Default';

      var values = {'FriendlyName': 'friendly_name', };
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
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'aws_credentials_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'encryption_key_sid': 'CRaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'aws_s3_url': 'https://www.twilio.com',
          'aws_storage_enabled': true,
          'encryption_enabled': true,
          'url': 'https://video.twilio.com/v1/CompositionSettings/Default'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'friendlyName': 'friendly_name'};
      var promise = client.video.v1.compositionSettings().create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});