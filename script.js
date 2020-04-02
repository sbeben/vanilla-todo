// Vanilla JS ToDo list

//Catching nodes of HTML DOM
const add = document.getElementById("addButton");

const item =  document.getElementById("userInput");

const clear = document.getElementById("clearAll");

// const tasklist = document.getElementById("taskType")

const listBox = document.getElementById("box")

//Taking a text input on focus right after loading the app

window.onload = function() {
  
  item.focus();

};


//The main function creates an item of the list. 
function createListElement(){
//The item element consists of
	const line = document.createElement("div");
	line.setAttribute("class", "listElement");
//a checkbox
	const check = document.createElement("input");
	check.type = "checkbox";
	check.setAttribute("onchange", "itemCheck(this)");
//name of an item
	const myItem = document.createElement("div");
	myItem.setAttribute("class","itemName") 
	myItem.innerHTML = item.value;
//and a "delete" button. 
	const deleteButton = document.createElement("button");
	deleteButton.setAttribute("onclick", "deleteListElement(this)");
	deleteButton.setAttribute("class", "del");
	deleteButton.innerHTML = "X";

//The item can not be added if inputbox is empty 
//because of checking function on "add" button
	
	listBox.appendChild(line);

	line.appendChild(check);

	line.appendChild(myItem);

	line.appendChild(deleteButton);
	
};

//Function that checks if something is written in input
function checkInputLength() {

	return item.value.length

};

//Function that marks item done or undone
function itemCheck(check) {
	
    if(check.checked === true) {
    	
        check.nextElementSibling.setAttribute("style", "text-decoration: line-through;");

    } else {

    	check.nextElementSibling.setAttribute("style", "text-decoration: none;");

    };
};

//Function that removes item from the list
function deleteListElement(button){
//This looks a bit wierd, but needs to be so in order to wirk in IE browser
	let parent = button.parentElement

	let parentOfParent = parent.parentElement

parentOfParent.removeChild(parent);
//For other browsers this function will look just like this:
//button.parentElement.remove();
};

//Function that adds an item on click
add.addEventListener("click", function() {

	if (checkInputLength() > 0) {

	createListElement();

	item.value = "";
	
	}

});

//List item also gets added by pressing "return"
item.addEventListener("keypress", function(event){

		if (checkInputLength() > 0 && event.keyCode === 13) {

		createListElement();

		item.value = "";
		}
});

//Function for deleting all items
//asks user for confirmation
clear.addEventListener("click", function(){

	const clearVerify = confirm("Are you shure you want to delete all items?");

	if (clearVerify == true) {

	return listBox.innerHTML = ""

	};

});


//
window.addEventListener('beforeunload', function (e) {

	if (listBox.innerHTML != "") {

		return e.returnValue = 'This will clear your list!';

	};

	return delete e['returnValue'];

});


