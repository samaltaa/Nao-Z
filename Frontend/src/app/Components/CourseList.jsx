'use client'
import React, { useEffect, useState } from 'react';
import { fetchData } from '../Utils/helpers';
import CourseCard from './CourseCard'

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
    <div className='w-full flex flex-grid justify-between pt-5 px-5 wrap-around'>
      {courses.map((course, index) => (
        <CourseCard name={course.name} description={course.description}/>
      ))}
    </div>
  );
};

export default CourseList;