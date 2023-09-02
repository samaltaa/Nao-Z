const mongoose = require("mongoose");

const programming_vocab = mongoose.Schema(
  {
    name:{
      type:String
    },
    description:{
      type:String
    }
  }
)

const Courses= mongoose.model("CourseInformation", {
  name: {type: String},
  description: {type: String}
});

const courses = mongoose.model("courseinformations", programming_vocab)

Courses.create = async(body) => {
  return await courses.create(body)
}
  
module.exports = courses;