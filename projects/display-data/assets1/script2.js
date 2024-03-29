let container5 = document.getElementById("container5");

fetch('./assets1/emojis.json')
  .then(response => response.json())
  .then(data => {
    processEmojis(data);
  })
  .catch(error => console.log(error));

function processEmojis(data) {
  let key = parseInt(document.querySelector('body').dataset.nameofresturantid);
  console.log(key); // This will log the value of `key` to the console
  
  // Loop through each item in the data array
  data.forEach(item => {
    // Check if the item's ID matches the key
    console.log(item.id, item.id === key);

    if (item.id === key) {
      // Create a new div element with the restaurant name
      let review = document.createElement("div");
      review.classList.add('review');

      let info = document.createElement("div");
      info.classList.add('info')

      review.innerHTML = `
        <p class="reviews">${item['reviews']}</p>`
        ;
      
      info.innerHTML = `
        <h1 class="Nameofresturant">${item['nameofresturant']}</h1>
        <p class="openinghour">Opening hours: ${item['openinghour']}</p>
        <p class="priceperperson">Price per person: ${item['priceperperson']}</p>
        <p class="reservation">Reservation app: ${item['reservationapp']}</p> 
        <p class="address">Address: ${item['address']}</p>`
        ;
        

      
      // Append the new element to container5
      container5.appendChild(review);
      container5.appendChild(info);
      
    }
  });
}
