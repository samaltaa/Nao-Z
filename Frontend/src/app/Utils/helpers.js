/* this file contains all the functions that will be used multiple times 
    across the different component of the program.
    if you are going to make any changes to this files, 
    make sure that you are in the 'refactor' branch 
    and carefully document the changes and test the changes
    prior to committing the code and merging it to main branch
    to avoud breaking the entire site. :)
*/



//data fetching function for API endpoint connection to frontend 
export async function fetchData(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data", error);
      throw error;
    }
  }
  

//pagination functions

export function handlePageChange(newPage){
    setCurrentPage(newPage);
};

export function handlePreviousPage(){
    if (currentPage > 1){
        handlePageChange(currentPage - 1);
    }
};

export function handleNextPage(){
    if (currentPage < pageCount){
        handlePageChange(currentPage + 1);
    }
};
