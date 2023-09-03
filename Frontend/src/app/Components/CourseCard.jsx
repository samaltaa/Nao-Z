import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import {fetchData} from '../Utils/helpers';

const CourseCard = ({name, description}) => {
  
    
  return (
    <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-yellow-500">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://media.istockphoto.com/id/1329541107/vector/polyglot-icon-foreign-languages-vector-illustration.jpg?s=612x612&w=0&k=20&c=7ytmFfeRCqaVJhxR9lYl9bfGp8cAs1vw0m-WeWqM3WA="
          alt=""
        />
      </div>
      <div className="p-6">
        
          <div>
            <h1 className="mb-2 text-xl font-bold leading-tight text-neutral-800 dark:text-neutral-50">
              {name}
            </h1>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              
            </p>
            {/* Render other course information as needed */}
          </div>
        
      </div>
      <ul className="w-full">
      <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">

      </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
          {description}
        </li>
        <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
          
        </li>
      </ul>
      <div className="p-6 flex justify-center">
        <button
          type="button"
          href="#"
          className="bg-yellow-600 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded-full"
        >
          Start Learning
        </button>
        <button
          type="button"
          href="#"
          className="bg-yellow-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
        >
          View Course
        </button>
      </div>
    </div>
  )
}

export default CourseCard