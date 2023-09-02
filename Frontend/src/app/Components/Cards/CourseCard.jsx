import React from 'react'

const CourseCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchData('http://localhost:3000/Courses')
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.log("error fetching data", error);
      });
    }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
    {courses.map((course, index) => (
      <div key={index}>
        <h2 className="text-xl font-semibold">{course.title}</h2>
        <p className="text-gray-600">{course.description}</p>
        {/* Render other course information as needed */}
      </div>
      ))}
    </div>
  )
}

export default CourseCard