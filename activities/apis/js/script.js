
let factList;

function getFact(){
  fetch('https://data.cityofnewyork.us/resource/2xir-kwzz.json')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      factList = data; // store data
      displayFact(0);
    })
    .catch(error => console.log(error));
}

function displayFact(factIndex){
  let fact = factList[factIndex];
  let text = fact.text;
  document.getElementById('fact').innerHTML = text;
}


window.onload = function(e){ 

    let factCount = 0;

    getFact();

    let refreshButton = document.getElementById('refresh');
    refreshButton.addEventListener('click', function(){

     if(factCount < 4){        
        factCount ++; // increment fact index until 5
        displayFact(factCount);
      }else{
        factCount = 0; // reset fact index
        getFact();
      }  
       
    });

};