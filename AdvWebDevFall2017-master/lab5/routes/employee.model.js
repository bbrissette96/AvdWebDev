var mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: [true, 'First Name is required']
    },
    lName:{
        type: String,
        required: [true, 'Last Name is required']
    },
    department: String,
    startDate:{
        type: Date,
        "default": Date.now
    },
    jobTitle: {
      type: String,
      required: [true, 'Job Title is required']
    },
    salary: {
      type: Number,
      required: true,
      min: 0,
      max: 10000000
    }
});

var employee = mongoose.model('employee', employeeSchema);
module.exports = employee;
