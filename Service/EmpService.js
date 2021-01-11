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

    
}

module.exports = new EmpService();