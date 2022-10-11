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

describe('PlaybackGrant', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.media.v1.playerStreamer('VJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .playbackGrant().create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'VJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://media.twilio.com/v1/PlayerStreamers/${sid}/PlaybackGrant`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'VJcafebabecafebabecafebabecafebabe',
          'url': 'https://media.twilio.com/v1/PlayerStreamers/VJcafebabecafebabecafebabecafebabe/PlaybackGrant',
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'date_created': '2015-07-30T20:00:00Z',
          'grant': {
              'playbackUrl': 'http://video.net/123/blabla?token=123',
              'playerStreamerSid': 'VJcafebabecafebabecafebabecafebabe',
              'requestCredentials': null
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.media.v1.playerStreamer('VJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .playbackGrant().create();
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

      var promise = client.media.v1.playerStreamer('VJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .playbackGrant().fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'VJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://media.twilio.com/v1/PlayerStreamers/${sid}/PlaybackGrant`;

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
          'date_created': '2015-07-30T20:00:00Z',
          'url': 'https://media.twilio.com/v1/PlayerStreamers/VJcafebabecafebabecafebabecafebabe/PlaybackGrant',
          'sid': 'VJcafebabecafebabecafebabecafebabe',
          'grant': {
              'playbackUrl': 'http://video.net/123/blabla?token=123',
              'playerStreamerSid': 'VJcafebabecafebabecafebabecafebabe',
              'requestCredentials': null
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.media.v1.playerStreamer('VJXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                   .playbackGrant().fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
