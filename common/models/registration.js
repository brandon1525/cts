'use strict';

module.exports = function(Registration) {
  Registration.schedule = function(msg, cb) {
    cb(null, msg);
  }
  Registration.remoteMethod('schedule', {
    accepts: { arg: 'data', type: 'object', http: { source: 'body' }, description: 'Instance of schedule' },
    returns: [
      { arg: 'student', type: 'string' },
      { arg: 'course', type: 'string' },
      { arg: 'semester', type: 'number' },
      { arg: 'id', type: 'string' }
    ],
    description: 'Method is used to schedule a course'
  });
};
