var mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    department: String,
    startDate: {
        type: Date,
        default: Date.now()
    },
    jobTitle: String,
    salary: String

});

var Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;