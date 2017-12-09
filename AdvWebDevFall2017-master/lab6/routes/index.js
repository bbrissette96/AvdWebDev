var express = require('express');
var router = express.Router();
var ctrlemployees = require('./employee.controller');

// employees
router.get('/Employee', ctrlemployees.employeesReadAll);
router.get('/Employee/:employeeid', ctrlemployees.employeesReadOne);
router.post('/Employee', ctrlemployees.employeesCreate);
router.put('/Employee/:employeeid', ctrlemployees.employeesUpdateOne);
router.delete('/Employee/:employeeid', ctrlemployees.employeesDeleteOne);


module.exports = router;
