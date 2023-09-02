'use client'
import React, { useEffect, useState } from 'react';
import { fetchData } from '../Utils/helpers';

const CourseList = () => {
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
    <div className='w-full flex flex-grid wrap-around'>
      {courses.map((course, index) => (
        <div key={index} className='course-card'>
          <h1>{course.name}</h1>
          <p>{course.description}</p>
          {/* Render other course information as needed */}
        </div>
      ))}
    </div>
  );
};

export default CourseList;