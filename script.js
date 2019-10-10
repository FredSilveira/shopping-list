var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var done =  document.querySelectorAll("li");
var deleted = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
};

function createListElement() {
	var liAdd = document.createElement("li");
	liAdd.appendChild(document.createTextNode(input.value + ' '));

	var btnAdd = document.createElement("button");
	btnAdd.appendChild(document.createTextNode("X"))
	btnAdd.classList.add("delete");
	liAdd.appendChild(btnAdd);

	ul.appendChild(liAdd);
	input.value = "";
};

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
};

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
};

function taskDone(c) {
	c.target.classList.toggle("done");
};

function removeTask (d) {
	d.target.parentElement.remove()
};

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

done.forEach((e) => {
		e.addEventListener("click", taskDone)
});

for (var i = 0 ; i < deleted.length; i++) {
	const element = deleted[i]
	element.addEventListener("click", removeTask)
};
