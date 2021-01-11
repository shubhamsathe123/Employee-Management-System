const employeeModel = require('../Model/EmpModel');

class EmpService {

    addEmployeeService = (req, next) => {
        try {
            return employeeModel.create(req).then((result) => {
                return ({ message: "record added successfully !", data: result })
            }).catch((error) => {
                return ({ message: "Failed to add record !", data: error })
            })
        } catch (error) {
             next(error);
        }
    }

    getEmployeesService = (req, next) => {
        try {
            return employeeModel.read().then((result) => {
                return ({ message: "records Found !", data: result, flag: true, code: 200 })
            }).catch((err) => {
                return ({ message: "No records found !",data:err, flag: false, code: 206 })
            })
        } catch (error) {
             next(error);
        }
    }
    

}

module.exports = new EmpService();