console.log("I am linked to a JavaScript source.");
console.log();
const myName = "MKG";
console.log("My name is " + myName + "\n");

console.log();
const number = 7;
console.log("typeof " + number + ": " + typeof number + "\n");

console.log();
let myBool = false;
console.log("A false boolean: " + myBool + "\n");

console.log();
var myNumber = 7.77;
console.log("Number value: " + myNumber);
console.log("typeof " + myNumber + ": " + typeof myNumber + "\n");

console.log();
console.log("\"2\" + 2 = " + 2 + "2");

console.log("2 * 2 = " + 2*2);

console.log("2 / 2 = " + 2/2);

console.log("2 + 2 = " + 2+2);

console.log("2 - 2 = " + 2-2);

console.log("2 % 2 = " + 2%2);

console.log("3 % 2 = " + 3%2);

console.log("2 ** 2 = " + 2**2 + "\n");

console.log();
console.log("Order of Operations:");
console.log("(2 + 2) * 2**2 / 2 - 2 + 2 = " + ((2 + 2) * 2**2 / 2 - 2 + 2) + "\n");

console.log();
let anArray = [1,2,3,4,5];
console.log("An array: " + anArray + "\n");

let myObject = {
    property1: "aString",
    property2: 7,
    property3: true,
    property4: 7.77,
    property5: ["one", 2, 3.3, false]
}

console.log();
console.log("Object of random stuff: " + JSON.stringify(myObject) + "\n");

console.log();
console.log("Loose Comparison");
let comparison1 = "2" == 2;
console.log("\"2\" == 2: " + comparison1 + "\n");

console.log();
console.log("Strict Comparison");
let comparison2 = "2" === 2;
console.log("\"2\" === 2: " + comparison2 + "\n");

console.log();
console.log("& operator:");
var ampComparator1 = 2 == 2 && "2" == "2";
var ampComparator2 = 2 == 2 && "5" == "2";
console.log("2 == 2 && \"2\" == \"2\": " + ampComparator1);
console.log("2 == 2 && \"5\" == \"2\": " + ampComparator2 + "\n");

console.log();
console.log("| operator:");
var orComparator1 = 2 == 2 || "5" == "2";
var orComparator2 = 2 == 2 || "2" == "2";
var orComparator3 = 5 == 2 || "5" == "2";
console.log("2 == 2 || \"5\" == \"2\": " + orComparator1);
console.log("2 == 2 || \"2\" == \"2\": " + orComparator2);
console.log("2 == 5 || \"5\" == \"2\": " + orComparator3 + "\n");