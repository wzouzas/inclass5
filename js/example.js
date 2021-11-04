// William Zouzas
// Worked with: Kelly Li
// In Class 5
// Date: 11/4/21

// ADD NEW ITEM TO END OF LIST
var newItem = document.createElement("li");
newItem.innerHTML = "cream";

var list = document.getElementsByTagName("ul")[0];
list.appendChild(newItem);

// ADD NEW ITEM START OF LIST
var newItem2 = document.createElement("li");
newItem2.innerHTML = "kale";
list.prepend(newItem2);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.getElementsByTagName("li");

for (let i = 0; i < listItems.length; i++) {
    listItems[i].setAttribute('class', 'cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var listName = document.getElementsByTagName("h2")[0];
//listName.innerHTML += " " + listItems.length;

var span = document.createElement("span");
span.innerHTML = listItems.length;
listName.appendChild(span);