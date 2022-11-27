const pantryInput = document.getElementById("pantryinput");
const list = document.getElementById("list");
const button = document.getElementById("button")
const amount = document.getElementById("amount")
const amountType = document.getElementById("amountType")
const fractions = document.getElementById('fractions')
const fractionsValue = fractions.value
const amountNum = parseInt(amount)
function inputLength() {
	return pantryInput.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(amount.value + ` ` + fractions.value + ` ` + amountType.value + ` of ` + pantryInput.value + ` `));
	pantryInput.value = "";
	amount.value = "";
	// li attached to parent div
	list.appendChild(li);
	// button created
	var del = document.createElement("button");
	del.classList.add("dbut");
	del.appendChild(document.createTextNode("Delete"));
	// del attaches to parent li
	li.appendChild(del);
}

// this works.
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
function deleteAfterClick(element) {
    if (element.target.className === "dbut") {
        element.target.parentElement.remove();
}
}

// this works.
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// This adds a list item if there's stuff typed and you click 'enter' good to go
button.addEventListener("click", addListAfterClick);

// this adds a list item if there's something typed and you press 'enter' on keyboard. good to go
pantryInput.addEventListener("keypress", addListAfterKeypress);

// this is supposed to add function to the delete WORKING YAAAAAAAAY
list.addEventListener("click", deleteAfterClick);