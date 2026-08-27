const mogoose =require("mongoose");

const Class = new mongoose.schema({
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