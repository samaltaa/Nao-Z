import React from 'react'
//folder where all functions for the app will be held for reuse
import '../Utils/helpers';

const CourseList = ()=> {
    const itemsPerPage = 4;
    const pageCount = Math.ceil(courses.length / itemsPerPage);

    const [currentPage, setCurrentPage] = React.useState(1);

    /*TODO: add all these functions to ./Utils/helpers.js 
            for modularity and cleaner code 
    */
    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handlePreviousPage =()=> {
        if (currentPage > 1){
            handlePageChange(currentPage - 1);
        }
    };

    const handleNextPage = () =>{
        if (currentPage < pageCount){
            handlePageChange(currentPage + 1);
        }
    };

    //end of functions block

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleCourses = courses.slice(startIndex, startIndex + itemsPerPage);



  return (
    <div className='w-full flex flex-grid wrap-around'>
        {visibleCourses.map((course, index) => (
            <div>CourseInfo card component goes here</div>
        ))}
        
        <div className='pagination'>
            <button
                onClick={handlePreviousPage}
                className={`pagination-button ${currentPage === 1 ? 'disabled': ''}`}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {Array.from({ length: pageCount}, (_, index) =>(
                <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {index + 1}
                </button>
            ))}

            <button
                onClick={handleNextPage}
                className={`pagination-button ${currentPage === pageCount ? 'disabled' : ''}`}
                disabled={currentPage === pageCount}
            >
                Next
            </button>
        </div>
    </div>
  )
}

export default CourseList