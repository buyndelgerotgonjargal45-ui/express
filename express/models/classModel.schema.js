const mongoose =require("mongoose");

const Class = new mongoose.Schema({
    name: {
        type: String,
        required: true,
     },
     teachers: {
        type: String,
        required: true,
    },
    classroom: {
        type: String
    }
},
{
    timestamps: true,
},
)
const classModel= mongoose.model("Class", Class);
module.exports = classModel