const route = require('express').Router();

const employeeController = require('../Controller/EmpController');


route.post('/employee/add', employeeController.addEmpController);
route.get('/employee/read', employeeController.getEmpController);


module.exports = route;