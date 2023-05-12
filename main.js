const buttonEl = document.getElementById('button');


apiKey = "eXWHQ3iIXbWmJz27CgRbRw==vHdRQOQ77JC5Pf8t";

const option = {
  method: "GET",
  Headers: {
    "X-apiKey": apiKey,
  },
}
const  apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";


 async function getJoke (){
    const response = await fetch(apiURL, option); 
    const data = await response.json();
    console.log(data);
}

buttonEl.addEventListener('click', getJoke);