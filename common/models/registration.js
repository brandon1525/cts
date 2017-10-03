'use strict';

module.exports = function(Registration) {
  Registration.schedule = function(register, cb) {
    Registration.find({where:{and :[{student: register.student},{course: register.course}]}}, (err, registers)=>{
      if (err) cb(err);
      if(registers.length>0){
        cb(err, { msg: 'Usuario ya se inscribio a ese curso'});
      }else{
        Registration.create(register, (err, register) => {
          if (err) cb(err);
          cb(null, register);
        });
      }
    });
  }
  Registration.remoteMethod('schedule', {
    accepts: { arg: 'data', type: 'object', http: { source: 'body' }, description: 'Instance of schedule' },
    returns: [
      { arg: 'student', type: 'string' },
      { arg: 'course', type: 'string' },
      { arg: 'semester', type: 'number' },
      { arg: 'id', type: 'string' }
    ],
    description: 'Method to schedule a course'
  });
};
