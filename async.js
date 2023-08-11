async function fetchDataFromAPI(url) {
    try {
      const response = await fetch(url); 
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); 
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  }

  function print() {
    console.log("hello world")
  }
  
  async function processData() {
    try {
      const apiData = await fetchDataFromAPI('https://jsonplaceholder.typicode.com/posts');
      console.log(apiData);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  processData();
  