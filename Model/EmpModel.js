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

    

}


module.exports=new EmpModel();