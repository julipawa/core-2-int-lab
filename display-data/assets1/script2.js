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
   if (item.Nameoftheresturant == 'Daniel'){
      let newItem = document.createElement("div");
      newItem.innerHTML = `
        <p class="Reviews">${item['Reviews']}</p>;
        <p class="opening hour">${item['opening hour']}</p>`;
      container.appendChild(newItem);
    }
});
}