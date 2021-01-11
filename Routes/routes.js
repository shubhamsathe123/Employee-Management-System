const route = require('express').Router();

const employeeController = require('../Controller/EmpController');


route.post('/employee/add', employeeController.addEmpController);
route.get('/employee/read', employeeController.getEmpController);
route.put('/employee/update/:id', employeeController.updateEmpController);


module.exports = route;