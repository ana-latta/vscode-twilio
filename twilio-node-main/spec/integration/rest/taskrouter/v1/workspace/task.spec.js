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

describe('Task', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks('WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Tasks/${sid}`;

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
          'age': 25200,
          'assignment_status': 'pending',
          'attributes': '{\'body\': \'hello\'}',
          'date_created': '2014-05-14T18:50:02Z',
          'date_updated': '2014-05-15T07:26:06Z',
          'task_queue_entered_date': '2014-05-14T18:50:02Z',
          'priority': 0,
          'reason': 'Test Reason',
          'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_channel_unique_name': 'task-channel',
          'timeout': 60,
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workflow_friendly_name': 'Test Workflow',
          'task_queue_friendly_name': 'Test Queue',
          'addons': '{}',
          'links': {
              'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks('WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
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

      var opts = {'ifMatch': 'if_match'};
      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks('WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Tasks/${sid}`;

      var headers = {'If-Match': 'if_match'};
      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'age': 25200,
          'assignment_status': 'pending',
          'attributes': '{\'body\': \'hello\'}',
          'date_created': '2014-05-14T18:50:02Z',
          'date_updated': '2014-05-15T07:26:06Z',
          'task_queue_entered_date': '2014-05-14T18:50:02Z',
          'priority': 0,
          'reason': 'Test Reason',
          'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_channel_unique_name': 'task-channel',
          'timeout': 60,
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workflow_friendly_name': 'Test Workflow',
          'task_queue_friendly_name': 'Test Queue',
          'addons': '{}',
          'links': {
              'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks('WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
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

      var opts = {'ifMatch': 'if_match'};
      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks('WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var sid = 'WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Tasks/${sid}`;

      var headers = {'If-Match': 'if_match'};
      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url,
        headers: headers
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks('WTXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
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
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0',
              'key': 'tasks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0'
          },
          'tasks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'age': 25200,
                  'assignment_status': 'pending',
                  'attributes': '{\'body\': \'hello\'}',
                  'date_created': '2014-05-14T14:26:54Z',
                  'date_updated': '2014-05-15T16:03:42Z',
                  'task_queue_entered_date': '2014-05-14T14:26:54Z',
                  'priority': 0,
                  'reason': 'Test Reason',
                  'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_unique_name': 'task-channel',
                  'timeout': 60,
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_friendly_name': 'Test Workflow',
                  'task_queue_friendly_name': 'Test Queue',
                  'addons': '{}',
                  'links': {
                      'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                          .tasks.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0',
              'key': 'tasks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0'
          },
          'tasks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'age': 25200,
                  'assignment_status': 'pending',
                  'attributes': '{\'body\': \'hello\'}',
                  'date_created': '2014-05-14T14:26:54Z',
                  'date_updated': '2014-05-15T16:03:42Z',
                  'task_queue_entered_date': '2014-05-14T14:26:54Z',
                  'priority': 0,
                  'reason': 'Test Reason',
                  'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_unique_name': 'task-channel',
                  'timeout': 60,
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_friendly_name': 'Test Workflow',
                  'task_queue_friendly_name': 'Test Queue',
                  'addons': '{}',
                  'links': {
                      'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                          .tasks.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Tasks',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0',
              'key': 'tasks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0'
          },
          'tasks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'age': 25200,
                  'assignment_status': 'pending',
                  'attributes': '{\'body\': \'hello\'}',
                  'date_created': '2014-05-14T14:26:54Z',
                  'date_updated': '2014-05-15T16:03:42Z',
                  'task_queue_entered_date': '2014-05-14T14:26:54Z',
                  'priority': 0,
                  'reason': 'Test Reason',
                  'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_unique_name': 'task-channel',
                  'timeout': 60,
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_friendly_name': 'Test Workflow',
                  'task_queue_friendly_name': 'Test Queue',
                  'addons': '{}',
                  'links': {
                      'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
                  }
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                          .tasks.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Tasks`;

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
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0',
              'key': 'tasks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending%2Creserved&PageSize=50&Page=0'
          },
          'tasks': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'age': 25200,
                  'assignment_status': 'pending',
                  'attributes': '{\'body\': \'hello\'}',
                  'date_created': '2014-05-14T14:26:54Z',
                  'date_updated': '2014-05-15T16:03:42Z',
                  'task_queue_entered_date': '2014-05-14T14:26:54Z',
                  'priority': 0,
                  'reason': 'Test Reason',
                  'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'task_channel_unique_name': 'task-channel',
                  'timeout': 60,
                  'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_friendly_name': 'Test Workflow',
                  'task_queue_friendly_name': 'Test Queue',
                  'addons': '{}',
                  'links': {
                      'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
                  }
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks.list();
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
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending&PageSize=50&Page=0',
              'key': 'tasks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending&PageSize=50&Page=0'
          },
          'tasks': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_assignment_status_multiple response',
    function(done) {
      var body = {
          'meta': {
              'first_page_url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending&PageSize=50&Page=0',
              'key': 'tasks',
              'next_page_url': null,
              'page': 0,
              'page_size': 50,
              'previous_page_url': null,
              'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks?TaskQueueSid=WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&Priority=1&TaskQueueName=task_queue_name&WorkflowName=workflow_name&WorkflowSid=WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa&AssignmentStatus=pending&PageSize=50&Page=0'
          },
          'tasks': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks.list();
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

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var workspaceSid = 'WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://taskrouter.twilio.com/v1/Workspaces/${workspaceSid}/Tasks`;

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
          'age': 25200,
          'assignment_status': 'pending',
          'attributes': '{\'body\': \'attributes\'}',
          'date_created': '2014-05-14T18:50:02Z',
          'date_updated': '2014-05-15T07:26:06Z',
          'task_queue_entered_date': null,
          'priority': 1,
          'reason': 'Test Reason',
          'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'task_channel_unique_name': 'unique',
          'timeout': 60,
          'url': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'workflow_friendly_name': 'Example Workflow',
          'task_queue_friendly_name': 'Example Task Queue',
          'addons': '{}',
          'links': {
              'task_queue': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/TaskQueues/WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'workflow': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Workflows/WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'workspace': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'reservations': 'https://taskrouter.twilio.com/v1/Workspaces/WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Tasks/WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Reservations'
          }
      };

      holodeck.mock(new Response(201, body));

      var promise = client.taskrouter.v1.workspaces('WSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                        .tasks.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});