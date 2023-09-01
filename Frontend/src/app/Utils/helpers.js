

/* cross-component data fetching function for API endpoint
    connection to frontend 
*/
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

export function handlePageChange (newPage){
    setCurrentPage(newPage);
};

export function handlePreviousPage () {
    if (currentPage > 1){
        handlePageChange(currentPage - 1);
    }
};


