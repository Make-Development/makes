

const mongoose = require("mongoose")


const NoteSchema = new mongoose.Schema({
    title: {
       type:String,
        required: [true, 'Please add a Title'],
        unique: true,
        maxlength: [40, 'Title Cannot be more than 40 Characters']
    },
    description: {
        type:String,
        required: true,
        maxlength: [200, 'Descript cannot be more than 200 Characters']
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', NoteSchema);
