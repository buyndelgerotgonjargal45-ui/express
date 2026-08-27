const mongoose = require('mongoose');


const Users = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
     
    },
    email: {
      type: String,
      required: true,
      
    },
    password: {
      type: String,
      required: true, 
      
    },
    age:{
        type: Number,
         required: true, 

    },
    classID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true, 

    }
  },
  {
    timestamps: true 
  },
);

const User = mongoose.model('User', Users);
module.exports = User;
