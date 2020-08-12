

const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    firstName: {
       type:String,
        required: [true, 'Please add a Title'],
        unique: true,
        maxlength: [40, 'Title Cannot be more than 40 Characters']
    },
    lastName: {
        type:String,
        required: true,
        maxlength: [50, 'Descript ']
    },
    blog: {
        type:String,
        required: true,
        maxlength: [50, 'Descript ']
    }
})


module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
