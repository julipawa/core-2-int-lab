
let container = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let container4 = document.getElementById("container4");
let container5 = document.getElementById("container5");

fetch('./assets1/emojis.json')
  .then(response => response.json())
  .then(data => {
    displayData(data);
  })
  .catch(error => console.log(error));

function displayData(data) {
  data.forEach(function(item, index) {
    console.log(item, index);
   if (item.genre == 'AMERICAN'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container.appendChild(newItem);
    }
    else if (item.genre == 'CHINESE') {
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container2.appendChild(newItem);
    }
    else if( item.genre == 'FRENCH'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container3.appendChild(newItem); 
    }
    else if( item.genre == 'FUSION'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container4.appendChild(newItem); 
    }
    else if( item.genre == 'ITALIAN'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container5.appendChild(newItem); 
    }
    else if( item.genre == 'JAPANESE'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container6.appendChild(newItem); 
    }
    else if( item.genre == 'SPANISH'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container7.appendChild(newItem); 
    }
    else if( item.genre == 'THAI'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['nameofresturant']}</p>`;
      container8.appendChild(newItem); 
    }
  });
}

  
  
  







