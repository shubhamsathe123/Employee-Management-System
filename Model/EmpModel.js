const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'first name is mandatory']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is mandatory']
    },
    emailId: {
        type: String,
        required: [true, 'Email is mandatory'],
        unique: true,
    },
    mobNo: {
        type: Number,
        required: [true, 'Mobile number is mandatory'],
        unique: true,
    },
    designation: {
        type: String,
        required: [true, 'designation is mandatory']
    },
    company: {
        type: String,
        required: [true, 'company name is mandatory']
    },
    
}, { timestamps: true });

let model = mongoose.model('samples', schema)

class EmpModel{

    create = (req, error) => {
        try {
            return new Promise((resolve, reject) => {
                model.create(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            error(err)
        }
    }

    read = (req, error) => {
        try {
            return new Promise((resolve, reject) => {
                model.find(req).then((result) => {
                    resolve(result)
                }).catch((error) => {
                    reject(error)
                })
            })
        } catch (err) {
            error(err)
        }
    }

    update = (req) => {
        try {

                return new Promise((resolve, reject) => {
                    model.findByIdAndUpdate(req.id,req.data1).then((result) => {
                        resolve(result)
                    }).catch((error) => {
                        reject(error)
                    })
                })
            }catch (error) {
        }
    }

    
}


module.exports=new EmpModel();