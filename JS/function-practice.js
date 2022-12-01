const prompt = require('prompt');

function difference(a, b) {
    return a - b;
}

console.log(difference(2, 2));
console.log(difference(0, 2));

function product(a, b) {
    return a * b;
}

console.log(product(2, 2)); // 4
console.log(product(0, 2)); // 0

function printDay(day) {
    switch (day) {
        case 1: {
            return "Sunday";
            break;
        }
        case 2: {
            return "Monday";
            break;
        }
        case 3: {
            return "Truesday";
            break;
        }
        case 4: {
            return "Wednesday";
            break;
        }
        case 5: {
            return "Thrusday";
            break;
        }
        case 6: {
            return "Friday"
            break;
        }
        case 7: {
            return "Saturday"
            break;
        }
        default: {
            return undefined;
        }
    }
}

console.log(printDay(4)); // "Wednesday"
console.log(printDay(41)); // undefined

function lastElement(arr) {
    return arr[arr.length - 1]
}

console.log(lastElement([1, 2, 3, 4])); // 4
console.log(lastElement([])); // undefined


function numberCompare(a, b) {
    if (a > b) {
        return "First is greater";
    } else if (a < b) {
        return "Second is greater";
    } else {
        return "Numbers are equal";
    }
}

console.log(numberCompare(1, 1)); // "Numbers are equal"
console.log(numberCompare(2, 1)); // "First is greater"
console.log(numberCompare(1, 2)); // "Second is greater"

function singleLetterCount(str, char) {
    str = str.toLowerCase();
    let returnVal = 0;

    for (let ch of str) {
        if (ch == char) returnVal += 1;
    }

    return returnVal;
}

console.log(singleLetterCount('amazing', 'A')); // 2
console.log(singleLetterCount('Rithm School', 'o')); // 2

function multipleLetterCount(word) {
    retObj = {};

    for (let ch of word) {
        if (ch in retObj) retObj[ch] += 1;
        else retObj[ch] = 1;
    }

    return retObj
}

console.log(multipleLetterCount("hello")); // {h:1, e: 1, l: 2, o:1}
console.log(multipleLetterCount("person")); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

function arrayManipulation(arr, cmd, loc, val) {
    cmd = cmd.toLowerCase();
    loc = loc.toLowerCase();

    switch (arguments.length) {
        case arguments.length < 3: {
            return "Too few arguments! You should supply an ARRAY, COMMAND, and LOCATION at a minimum.";
        }
        case 3: {
            if (cmd == "remove") {
                if (loc == "beginning") {
                    return arr.shift();
                } else if (loc == "end") {
                    return arr.pop();
                }
            }
            break;
        }
        case 4: {
            if(cmd == "add"){
                if (loc == "beginning") {
                    arr.unshift(val);
                    return arr;
                } else if (loc == "end") {
                    arr.push(val);
                    return arr;
                }
            }
            break;
        }
    }
}

console.log(arrayManipulation([1, 2, 3], "remove", "end")); // 3
console.log(arrayManipulation([1, 2, 3], "remove", "beginning")); // 1
console.log(arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
console.log(arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]

function isPalindrome(str) {
    var j = str.length - 1;

    for (var i = 0; i < str.length; i++) {
        if (j == i || i > j && j < i) 
            return true;
        else if (str[i] == str[j]){
            j--;
            continue;
        } 
        else 
            return false;
    } 
}

console.log(isPalindrome('testing')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('hannah')); // true
console.log(isPalindrome('robert')); // false

function rockPaperScissors(tryAgain) {
    if(tryAgain == false || tryAgain == undefined){
        console.log("\n\nWelcome to Rock-Paper-Scissors!\n");
        console.log(("Select a Sign to Throw! (Rock, Paper, or Scissors)"));
    }    

    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    let signToBeat = "";

    let rockWin = "Rock breaks Scissors.";
    let paperWin = "Paper covers Rock.";
    let scissorsWin = "Scissors cut Paper.";
    let win = "You Win!\n";
    let lose = "You Lose!\n";
    let tie = "You chose the same sign. It's a Tie!\n"

    prompt.start();

    const start = prompt.get(['choice'], function (err, result) {
        if (err) {
          return onErr(err);
        }      

        result.choice = result.choice.toLowerCase();

        switch(cpuChoice) {
            case 1: {
                signToBeat = "Rock";
                break;
            }
            case 2: {
                signToBeat = "Paper";
                break;
            }
            case 3: {
                signToBeat = "Scissors"
            }
        }                  

        switch(result.choice) {            
            case "rock": {
                console.log("\nCPU has selected: " + signToBeat + "!");
                if(signToBeat == "Paper") {
                    console.log(paperWin + lose);
                } else if(signToBeat == "Scissors") {
                    console.log(rockWin + win);
                } else if(signToBeat == "Rock") {
                    console.log(tie);
                }
                break;
            }
            case "paper": {
                console.log("\nCPU has selected: " + signToBeat + "!");
                if(signToBeat == "Paper") {
                    console.log(tie);
                } else if(signToBeat == "Scissors") {
                    console.log(scissorsWin + lose);
                } else if(signToBeat == "Rock") {
                    console.log(paperWin + win);
                }
                break;
            }
            case "scissors": {
                console.log("\nCPU has selected: " + signToBeat + "!");
                if(signToBeat == "Paper") {
                    console.log(scissorsWin + win);
                } else if(signToBeat == "Scissors") {
                    console.log(tie);
                } else if(signToBeat == "Rock") {
                    console.log(rockWin + lose);
                }
                break;
            }
            default: {
                console.log("\nYou must select ROCK, PAPER, or SCISSORS to play!");
                tryAgain = true;
                rockPaperScissors(tryAgain);
            }
        }    
    });    
}

rockPaperScissors();
