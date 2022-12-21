const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toDoScehame = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    duedate:{
      type:Date,
      required:true
    },
    status:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('ToDo', toDoScehame);
