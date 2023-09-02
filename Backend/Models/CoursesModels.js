const mongoose = require("mongoose");

const Courses_List = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter name"]
        },
        description: {
            type: String,
            required: [true, "please enter description"]
        },
        source: {
            type: String,
            required: [true, "please enter source"]
        }
    }
)
const Courses = mongoose.model("courses", {
    name: {type: String},
    description: {type: String},
    source: {type: String}
});



const courses = mongoose.model('courses', Courses_List);

Courses.create = async(body) => {
    return await courses.create(body);
};
module.exports = Courses