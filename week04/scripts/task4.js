/* Lesson 4 */

/* DATA */

let myInfo = {}

myInfo['name'] = 'Tanner Levi';

myInfo['photo'] = 'images/portrait.png';

myInfo['favoriteFoods'] = ['Pizza','Pasta','Caesar Salad'];

myInfo['hobbies'] = ['Digital Sculpting','Drones'];

myInfo['placesLived'] = {};

myInfo.placesLived.place ="";
myInfo.placesLived.length = "";

myInfo.placesLived.place = ["Mesa, AZ", "Gilbert, AZ", "San Tan Valley, AZ", "Cape Verde, Praia"]
myInfo.placesLived.length = ["19", "1", "3", "2"]


// Step 1: Declare a new variable to hold information about yourself

// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

document.querySelector("#name").innerHTML = myInfo.name;

document.querySelector('img').setAttribute('src', myInfo.photo);

document.querySelector('img').setAttribute('alt', myInfo.name);

let foodList = document.getElementById('favorite-foods');
for (let i =0; i < myInfo.favoriteFoods.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = myInfo.favoriteFoods[i];
    foodList.append(listItem);
}

let hobbyList = document.getElementById('hobbies');
for (let i = 0; i < myInfo.hobbies.length; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = myInfo.hobbies[i];
    hobbyList.append(listItem);
}

let placesList = document.getElementById('places-lived');
for (let i = 0; i < myInfo.placesLived.place.length; i++) {
    let placeItem = document.createElement('dt');
    let lengthItem = document.createElement('dd');
    placeItem.textContent = myInfo.placesLived.place[i];
    lengthItem.textContent = myInfo.placesLived.length[i];
    placesList.append(placeItem, lengthItem);
}


// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
