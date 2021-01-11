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

    getEmployeesService = (req) => {
        try {
            let object={}
            return employeeModel.read().then((result) => {
                return ({ message: "records Found !", data: result, flag: true, code: 200 })
            }).catch((err) => {
                return ({ message: "No records found !",data:err, flag: false, code: 206 })
            })
        } catch (error) {
        }
    }

    getByIdEmployeeService = (req) => {
        try {
            let request = {
                "_id":req.params.id
            }
            return employeeModel.read(request).then((result) => {
                return ({ message: "records Found by id !", data: result, flag: true, code: 200 })
            }).catch((err) => {
                return ({ message: "No records found by id!",data:err, flag: false, code: 206 })
            })
        } catch (error) {
        }
    }
    updateEmployeeService = (req) => {
        try {
            let id=req.params.id;
            let employeeData={
                   id,data1:req.body
            }
            return employeeModel.update(employeeData).then((result) => {
                return ({ message: "Employee records Updated !", data: result })
            }).catch((error) => {
                return ({ message: "Failed to update record !", error: error })
            })
        } catch (error) {
            console.log(error)
        }
    }

    deleteEmployeeService = (req, next) => {
        try {
            
            return employeeModel.delete(req, next).then((result) => {
                return ({ message: "Employee record deleted !", flag: true, code: 200, data: result })
            }).catch((err) => {
                return ({ message: "failed to delete data", flag: false, code: 206, data: err })
            })
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new EmpService();