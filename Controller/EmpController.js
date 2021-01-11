const { request } = require('express');
const employeeService = require('../Service/EmpService');
let response={}

class EmpController{

    addEmpController = (req, res, next) => {
        try {
            employeeService.addEmployeeService(req.body).then((result) => {
                response.success = true;
                response.message = result.message;
                response.data = result.data;
                return res.status(200).send(response);
            }).catch((err) => {
                response.success = false;
                response.message = err.message;
                response.error = err.err;
                return res.status(400).send(response);
            })
        } catch (error) {
            next(error);
        }
    }
    
}

module.exports = new EmpController();