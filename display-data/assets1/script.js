//setup container element
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
  const myLink = {
    "text": "Link to my site",
    "url": "https://www.example.com"
};

function MyComponent() {
    return (
        <a href={myLink.url}>{myLink.text}</a>
    );
}


  function createLink() {
    let anchor = document.createElement('a');
    let link = document.createTextNode("Name of resturant");
    anchor.appendChild(link);
 
}
function displayData(data) {
  data.forEach(function(item, index) {
    console.log(item, index);
   if (item.genre == 'AMERICAN'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container.appendChild(newItem);
    }
    else if (item.genre == 'CHINESE') {
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container2.appendChild(newItem);
    }
    else if( item.genre == 'FRENCH'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container3.appendChild(newItem); 
    }
    else if( item.genre == 'FUSION'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container4.appendChild(newItem); 
    }
    else if( item.genre == 'ITALIAN'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container5.appendChild(newItem); 
    }
    else if( item.genre == 'JAPANESE'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container6.appendChild(newItem); 
    }
    else if( item.genre == 'SPANISH'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container7.appendChild(newItem); 
    }
    else if( item.genre == 'THAI'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Nameofresturant">${item['Name of resturant']}</p>`;
      container8.appendChild(newItem); 
    }
  });
}









