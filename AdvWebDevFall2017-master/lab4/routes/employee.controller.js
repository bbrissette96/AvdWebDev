var employee = require('./employee.model');
var debug = require('debug')('demo:employee');
module.exports.home = function(req, res) {
  if (req.method === 'POST') {
    var msg = '';
    req.checkBody("fname", "Please enter a first name").notEmpty();
    req.checkBody("lname", "Please enter a last name").notEmpty();;
    req.checkBody("department", "Please enter a department").notEmpty();
    req.checkBody("startDate", "Please enter a start date").notEmpty();
    req.checkBody("jobTitle", "Please enter a job title").notEmpty();
    req.checkBody("salary", "Please enter a salary").notEmpty();
    var errors = req.validationErrors();
    console.log(errors);

    employee.create({
        fName: req.body.fname,
        lName: req.body.lname,
        department: req.body.department,
        startDate: req.body.startDate,
        jobTitle: req.body.jobTitle,
        salary: req.body.salary
      })
      .then(function() {
        msg = 'Employee was Saved';
        return;
      })
      .catch(function(err) {
        msg = 'Employee was not Saved';
        return err.message;
      }).then(function(err) {
        res.render('index', {
          title: 'Employee',
          message: msg,
          errors: errors
        });
      });
  } else {
    res.render('index', {
      title: 'New Employee',
      message: ''
    });
  }
};

module.exports.view = function(req, res) {
  employee
    .find()
    .exec()
    .then(function(results) {
      res.render('view', {
        title: 'View Employee',
        results: results
      });
    });
};

module.exports.delete = function(req, res) {
  var id = req.params.id,
    removed = 'ID was not found';
  if (id) {
    employee.remove({
        _id: id
      })
      .then(function() {
        removed = `${id} has been removed`;
        finish();
      })
      .catch(function(err) {
        removed = `${id} has not been removed`;
        finish();
      });
  } else {
    finish();
  }

  function finish() {
    res.render('delete', {
      title: removed
    });
  }
};

module.exports.update = function(req, res) {
  var id = req.params.id;
  var msg = '';
  if (req.method === 'POST') {
    id = req.body._id;
    employee
      .findById(id)
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
      .then(function() {
        msg = 'data has been updated';
        finished();
      })
      .catch(function() {
        msg = 'data has NOT been updated';
        finished();
      });
  } else {
    finished();
  }

  function finished() {
    employee
      .findOne({
        '_id': id
      })
      .exec()
      .then(function(results) {
        res.render('update', {
          title: 'Update Results',
          message: msg,
          results: results
        });
      })
      .catch(function() {
        res.render('notfound', {
          message: 'Sorry ID not found'
        });
      });
  }
};
