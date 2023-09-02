const mongoose = require("mongoose");

const CoursesSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    source: { type: String }
  });
  
  const Courses = mongoose.model("courses", CoursesSchema);
  
  module.exports = Courses;