console.log("I am linked to a JavaScript source.");

const myName = "MKG";
console.log("My name is " + myName);

const number = 7;
console.log("typeof " + number + ": " + typeof number);

let myBool = false;
console.log("A false boolean: " + myBool);

var myNumber = 7.77;
console.log("Number value: " + myNumber);
console.log("typeof " + myNumber + ": " + typeof myNumber);

console.log("\"2\" + 2 = " + 2 + "2");

console.log("2 * 2 = " + 2*2);

console.log("2 / 2 = " + 2/2);

console.log("2 + 2 = " + 2+2);

console.log("2 - 2 = " + 2-2);

console.log("2 % 2 = " + 2%2);

console.log("3 % 2 = " + 3%2);

console.log("2 ** 2 = " + 2**2);

console.log("Order of Operations:");
console.log("(2 + 2) * 2**2 / 2 - 2 + 2 = " + ((2 + 2) * 2**2 / 2 - 2 + 2));

let anArray = [1,2,3,4,5];
console.log("An array: " + anArray);

let myObject = {
    property1: "aString",
    property2: 7,
    property3: true,
    property4: 7.77,
    property5: ["one", 2, 3.3, false]
}
console.log("Object of random stuff: " + JSON.stringify(myObject));

console.log("Loose Comparison");
let comparison1 = "2" == 2;
console.log("\"2\" == 2: " + comparison1);

console.log("Strict Comparison");
let comparison2 = "2" === 2;
console.log("\"2\" === 2: " + comparison2);

console.log("& operator:");
var ampComparator1 = 2 == 2 && "2" == "2";
var ampComparator2 = 2 == 2 && "5" == "2";
console.log("2 == 2 && \"2\" == \"2\": " + ampComparator1);
console.log("2 == 2 && \"5\" == \"2\": " + ampComparator2);

console.log("| operator:");
var orComparator1 = 2 == 2 || "5" == "2";
var orComparator2 = 2 == 2 || "2" == "2";
var orComparator3 = 5 == 2 || "5" == "2";
console.log("2 == 2 || \"5\" == \"2\": " + orComparator1);
console.log("2 == 2 || \"2\" == \"2\": " + orComparator2);
console.log("2 == 5 || \"5\" == \"2\": " + orComparator3);