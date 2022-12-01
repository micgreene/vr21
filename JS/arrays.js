console.log("\n\n\n//------------------------------------------------------//");
console.log("Arrays Practice\n\n");

let people = ["Greg", "Mary", "Devon", "James"];

// Write the command to remove “Greg” from the array.
// Write the command to remove “James” from the array.
// Write the command to add “Matt” to the front of the array.
// Write the command to add your name to the end of the array.
// Write the command to make a copy of the array using slice. The copy should NOT include “Mary” or “Matt”.
// Write the command that gives the indexOf where “Mary” is located.
// Write the command that gives the indexOf where “Foo” is located (this should return -1).
// Redefine the people variable with the value you started with. Using the splice command, remove “Devon” from the array and add “Elizabeth” and “Artie”. Your array should look like this when you are done [“Greg”, “Mary”, “Elizabeth”, “Artie”, “James”].
// Create a new variable called withBob and set it equal to the people array concatenated with the string of “Bob”.

people.shift();
console.log("Remove Greg: " + people);

people.pop();
console.log("Remove James: " + people);

people.unshift("Matt");
console.log("Add Matt: " + people);


people.push("Mike");
console.log("Add Me: " + people);

peopleCopy = people.slice(2);
console.log("Copy Array: " + peopleCopy);

console.log("Mary's Index: " + people.indexOf("Mary"));

console.log("Foo's Index (-1): " + people.indexOf("Foo"));

people = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "Elizabeth", "Artie");
console.log("Splice out Devon with Elizabeth, Artie: " + people);

let withBob = people.concat("Bob");
console.log("withBob array: " + withBob);
