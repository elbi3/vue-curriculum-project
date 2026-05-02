async function fetchDogData(){
    const response = await fetch("https://dogapi.dog/api/v2/breeds");
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const myData = await response.json();
    setTimeout(() => {
        
        console.log(myData ?  `response: ${myData[0].type}` : "No response...");
    }, 1000);
    return myData;
};

fetchDogData();