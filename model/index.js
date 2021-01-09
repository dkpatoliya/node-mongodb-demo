const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/collage',{useNewUrlParser: true, useUnifiedTopology: true}, (error)=>{
  if (!error) console.log("Success");
  if(error) console.log("Error :", error);

})

const students = require("./students.model")