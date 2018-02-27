console.log("Hello");

//Challenge exercise 1
var numOfSandwiches = 2 * 4;
console.log("numOfSandwiches: ", numOfSandwiches);

//Challenge exercise 2
var name = "Andy";
var string = "Hello " + name + ", how are you?";
console.log("string: ", string);

// Challenge exercise 3
var DNA = "GCAT";
var RNA = DNA.replace('T', 'U');
console.log("RNA: " + RNA);

// Challenge exercise 4
// var animal = "Goat";
// var animal = "Dog";
var animal = "Alligator";
if (animal.toLowerCase() === 'alligator') {
  console.log("small");
}
else {
  console.log("wide");
}

var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarny').innerHTML = domString;