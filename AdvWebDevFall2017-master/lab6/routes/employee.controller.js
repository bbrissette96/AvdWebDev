var employee = require('./employee.model');
var debug = require('debug')('demo:employee');

function sendJSONresponse(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.employeesReadAll = function(req, res) {
    debug('Getting all employees');
    employee
     .find(req.where, null, req.options)
     .exec()
     .then(function(results){
        sendJSONresponse(res, 200, results);
     })
     .catch(function(err){
        sendJSONresponse(res, 404, err);
     });

};

module.exports.employeesReadOne = function(req, res) {
    if (req.params && req.params.employeeid) {
        debug('Getting single employee with id =', req.params.employeeid );

        employee
        .findById(req.params.employeeid)
        .exec()
        .then(function(results){
            sendJSONresponse(res, 200, results);
        }).catch(function(err){
            sendJSONresponse(res, 404, {
                "message": "employeeid not found"
            });
        });

    } else {
        sendJSONresponse(res, 404, {
            "message": "employeeid not found"
        });
    }
};

module.exports.employeesCreate = function(req, res) {

    debug('Creating a employee with data ', req.body);

    employee.create({
        fname: req.body.fname,
        lname: req.body.lname,
        department: req.body.department,
        startDate: req.body.startDate,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary
    })
    .then(function(dataSaved){
        debug(dataSaved);
        sendJSONresponse(res, 201, dataSaved);
    })
    .catch(function(err){
        debug(err);
        sendJSONresponse(res, 400, err);
    });

};

module.exports.employeesUpdateOne = function(req, res) {
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
        "message": "Not found, employeeid is required"
    });
    return;
  }
  employee
    .findById(req.params.employeeid)
    .exec()
    .then(function(employeeData) {
        employeeData.fName = req.body.fname;
        employeeData.lName = req.body.lname;
        employeeData.department = req.body.department;
        employeeData.startDate = req.body.startDate;
        employeeData.jobTitle = req.body.jobTitle;
        employeeData.salary = req.body.salary;
        return employeeData.save();
    })
    .then(function(data){
        sendJSONresponse(res, 200, data);
    })
    .catch(function(err){
        sendJSONresponse(res, 400, err);
    });
};

module.exports.employeesDeleteOne = function(req, res) {
  if ( !req.params.employeeid ) {
    sendJSONresponse(res, 404, {
        "message": "Not found, employeeid is required"
    });
    return;
  }
  employee
    .findByIdAndRemove(req.params.employeeid)
    .exec()
    .then(function(data){
        debug("employee id " + req.params.employeeid + " deleted");
        debug(data);
        sendJSONresponse(res, 204, null);
    })
    .catch(function(err){
        sendJSONresponse(res, 404, err);
    });

};
