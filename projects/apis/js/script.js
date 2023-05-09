const dataContainer = document.getElementById('data-container');
let mybeachdata = {};

fetch('https://data.cityofnewyork.us/resource/2xir-kwzz.json')
  .then(response => response.json())
  .then(data => {
    let highestResult = 0;
    let highestResultBeach = '';
    

    data.forEach(item => {
      const enterococciResults = parseFloat(item.enterococci_results);

      if (enterococciResults > highestResult) {
        highestResult = enterococciResults;
        highestResultBeach = item.beach_name;
      }

      if (mybeachdata[item.beach_name]) {
        mybeachdata[item.beach_name].push(parseFloat(item.enterococci_results));
      } else {
        mybeachdata[item.beach_name] = [];
      }
    });

    const highestResultElement = document.createElement('p');
    highestResultElement.innerHTML = `<div class="highest"> Highest Enterococci Results: ${highestResult} at ${highestResultBeach}</div>`;
    dataContainer.appendChild(highestResultElement);

    let min = 9.9;
    let max = 1000;
    let sorteddata = [];

    for (const name in mybeachdata) {
      const maxResult = Math.max(...mybeachdata[name]);
      sorteddata.push({ 'name': name, 'result': maxResult ,});
      
    }
    
    sorteddata.sort((a, b) => parseFloat(a.result) - parseFloat(b.result));
    
   
   sorteddata.forEach(record => {
  let maxResult = record.result;
  const beachName = document.createElement('p');
  beachName.className = 'beach-name';
  beachName.innerHTML = `
    <div class="header">Beach Name:</div>
    <div class="dropdown">
      <button class="dropbtn">${record.name}</button>
      <div id="myDropdown" class="dropdown-content">
      <br>
      <div class="result">Highest Enterococci Results: ${maxResult}</div>
      <br>
      Enterococci results from different sample areas:
     
      </div>
    </div>
  
  `;
  beachName.style.setProperty('--styl', (maxResult / (max - min) * 100));
  dataContainer.appendChild(beachName);

  const dropdownButton = beachName.querySelector('.dropbtn');
  dropdownButton.addEventListener('click', myFunction);

  const dropdownContent = beachName.querySelector('.dropdown-content');
  mybeachdata[record.name].forEach(result => {
    const sampleDiv = document.createElement('p');
    sampleDiv.textContent = result;
    dropdownContent.appendChild(sampleDiv);

  });
});
});

function myFunction() {
  const dropdownContent = this.nextElementSibling;
  dropdownContent.classList.toggle('show');
}



// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
});



      
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};




const body = document.body;
const height = body.clientHeight;
const gradientStart = '#F2EBC4'; // initial color
const gradientEnd = '#00fffc'; // final color

document.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollPercentage = scrollTop / (height - window.innerHeight);
  const color = interpolateColor(gradientStart, gradientEnd, scrollPercentage);
  body.style.background = `linear-gradient(to bottom, ${color})`;
});

function interpolateColor(start, end, percentage) {
  const r = Math.round(parseInt(start.substring(1, 3), 16) * (1 - percentage) + parseInt(end.substring(1, 3), 16) * percentage);
  const g = Math.round(parseInt(start.substring(3, 5),))}
