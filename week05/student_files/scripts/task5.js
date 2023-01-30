/* Lesson 5 */

var newDate = new Date();

var today = newDate.getDay();

if (today >= 1 && today <=5) {
    message1 = "Hang in there!";
}
else {
    message1 = "Woohoo! It is the weekend!"
}

let message2 = null;

switch (today) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

let firstMessage = document.querySelector("#message1");

firstMessage.innerHTML = message1;

let secondMessage = document.querySelector("#message2");

secondMessage.innerHTML = day;

var temples =[];

function output(arr) {
    arr.forEach(element => {
        let art = document.createElement('article');
        let templeName = document.createElement('h3');
        let templeLocation = document.createElement('h4');
        let templeDedication = document.createElement('h4');
        let templeImg = document.createElement('img');

        templeName.innerHTML = element.templeName;
        templeLocation.innerHTML = element.location;
        templeDedication.innerHTML = element.dedicated;
        templeImg.src = element.imageUrl;

        art.append(templeName, templeLocation, templeDedication, templeImg);
        document.querySelector("#temples").append(art);
    });
}

const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

async function getTemples(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        temples = data;
        output(temples);
    }
}

function reset() {
    return document.getElementById('temples').innerHTML = '';

}

function sortBy(event) {
    reset();

    let sort = document.getElementById('sortBy');

    if (event.target.value === 'templeNameAscending') {
        let sortedTemples = temples.sort(function(a,b) {return a.templeName > b.templeName ? -1 : 1});
        
        return output(sortedTemples);
    }
    else if(event.target.value === 'templeNameDescending') {
        let sortedTemples = temples.sort(function(a,b) {return a.templeName < b.templeName ? -1 : 1});

        return output(sortedTemples);
    }
}

document.querySelector('#sortBy').addEventListener('change', sortBy);

getTemples(url);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
