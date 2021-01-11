const route = require('express').Router();

const employeeController = require('../Controller/EmpController');


route.post('/employee/add', employeeController.addEmpController);


module.exports = route;