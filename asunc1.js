
async function fetchData() {
    console.log("Fetching data...");
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Pauses for 2 seconds
    console.log("Data fetched!");
  }
  
  
  function sayHello() {
    console.log("Hello!");
  }

  fetchData(); 
  sayHello();  
  