'use strict';

module.exports = function(Course) {
  var app = require('../../server/server');
  Course.observe('loaded', function(ctx, next) {
    //console.log('ctx.data', ctx.data);
    let Registration = app.models.Registration;
    /*let course = {
      name : ctx.data.name,
      description: ctx.data.description
    };*/
    Registration.find(
      {
        where: { course: ctx.data.id },
        include: [
          {
            relation: 'registers',
            scope: {
              fields: ['name', 'major', 'email', 'id']
            }
          }
        ]
      }, (err, courses)=>{
      console.log(courses);
    });

    next();
  });
};
