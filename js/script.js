// QUESTION 1
var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];

// a for loop that loops through the array
for (var i = 0; i < pets.length; i++) {
  // if the age property of the objects is 4 or above, logs the type
  if (pets[i].age >= 4) {
    console.log(pets[i].type);
  }
}

// QUESTION 2

function typeCheck(theType) {
  var typeOfArgument = typeof theType;

  // if the type of the value is a boolean, log it. Else; log the string sentence
  if (typeOfArgument === "boolean") {
    console.log(theType);
  } else {
    console.log("Please pass a boolean value in.");
  }
}

// function called with a boolean value. If it's called with a number or string value, the string sentence is logged instead
typeCheck(true);

// QUESTION 3

// two variables, one to mark the subheading (<h2>) and one for the button (<button>)
var subheadingUpdate = document.querySelector("h2");
var button = document.querySelector("button");

// added a function to the button when it is clicked that changes the HTML inside the <h2> tags and the style(color)
button.onclick = function () {
  subheadingUpdate.innerHTML = "Updated subheading";
  subheadingUpdate.style.color = "blue";
};
