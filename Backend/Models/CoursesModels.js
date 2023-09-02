const mongoose = require("mongoose");

const Courses_List = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "please enter term"]
        },
        description: {
            type: String,
            required: [true, "please enter pinyin"]
        }
    }
)
const Courses = mongoose.model("courses", {
    name: {type: String},
    description: {type: String}
});



const courses = mongoose.model('courses', Courses_List);

Courses.create = async(body) => {
    return await courses.create(body);
};
module.exports = Courses