import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import {fetchData} from '../Utils/helpers';

const CourseCard = ({name, description}) => {
  
    
  return (
    <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://media.istockphoto.com/id/1329541107/vector/polyglot-icon-foreign-languages-vector-illustration.jpg?s=612x612&w=0&k=20&c=7ytmFfeRCqaVJhxR9lYl9bfGp8cAs1vw0m-WeWqM3WA="
          alt=""
        />
      </div>
      <div className="p-6">
        
          <div>
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {name}
            </h5>
            <p className="text-base text-neutral-600 dark:text-neutral-200">
              {description}
            </p>
            {/* Render other course information as needed */}
          </div>
        
      </div>
      <ul className="w-full">
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
          
        </li>
        <li className="w-full border-b-2 border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
          Dapibus ac facilisis in
        </li>
        <li className="w-full border-neutral-100 border-opacity-100 px-6 py-3 dark:border-opacity-50">
          Vestibulum at eros
        </li>
      </ul>
      <div className="p-6">
        <a
          type="button"
          href="#"
          className="pointer-events-auto mr-5 inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Card Link
        </a>
        <a
          type="button"
          href="#"
          className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        >
          Another Link
        </a>
      </div>
    </div>
  )
}

export default CourseCard