console.log("\n\n\n//------------------------------------------------------//");
console.log("Function Practice\n\n");

function difference(a, b) {
    return a - b;
}

console.log("difference: " + difference(2, 2));
console.log("difference: " + difference(0, 2));

function product(a, b) {
    return a * b;
}

console.log("product: " + product(2, 2)); // 4
console.log("product: " + product(0, 2)); // 0

function printDay(day) {
    switch (day) {
        default: {
            return undefined;
        }
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
    }
}

console.log("printDay: " + printDay(4)); // "Wednesday"
console.log("printDay: " + printDay(41)); // undefined

function lastElement(arr) {
    return arr[arr.length - 1]
}

console.log("lastElement: " + lastElement([1, 2, 3, 4])); // 4
console.log("lastElement: " + lastElement([])); // undefined


function numberCompare(a, b) {
    if (a > b) {
        return "First is greater";
    } else if (a < b) {
        return "Second is greater";
    } else {
        return "Numbers are equal";
    }
}

console.log("numberCompare: " + numberCompare(1, 1)); // "Numbers are equal"
console.log("numberCompare: " + numberCompare(2, 1)); // "First is greater"
console.log("numberCompare: " + numberCompare(1, 2)); // "Second is greater"

function singleLetterCount(str, char) {
    str = str.toLowerCase();
    let returnVal = 0;

    for (let ch of str) {
        if (ch == char) returnVal += 1;
    }

    return returnVal;
}

console.log("singleLetterCount: " + singleLetterCount('amazing', 'A')); // 2
console.log("singleLetterCount: " + singleLetterCount('Rithm School', 'o')); // 2

function multipleLetterCount(word) {
    retObj = {};

    for (let ch of word) {
        if (ch in retObj) retObj[ch] += 1;
        else retObj[ch] = 1;
    }

    return retObj
}

console.log("multipleLetterCount: " + JSON.stringify(multipleLetterCount("hello"))); // {h:1, e: 1, l: 2, o:1}
console.log("multipleLetterCount: " + JSON.stringify(multipleLetterCount("person"))); // {p:1, e: 1, r: 1, s:1, o:1, n:1}

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
            if (cmd == "add") {
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

console.log("arrayManipulation: " + arrayManipulation([1, 2, 3], "remove", "end")); // 3
console.log("arrayManipulation: " + arrayManipulation([1, 2, 3], "remove", "beginning")); // 1
console.log("arrayManipulation: " + arrayManipulation([1, 2, 3], "add", "beginning", 20)); // [20,1,2,3]
console.log("arrayManipulation: " + arrayManipulation([1, 2, 3], "add", "end", 30)); // [1,2,3,30]

function isPalindrome(str) {
    var j = str.length - 1;

    for (var i = 0; i < str.length; i++) {
        if (j == i || i > j && j < i)
            return true;
        else if (str[i] == str[j]) {
            j--;
            continue;
        }
        else
            return false;
    }
}

console.log("isPalindrome: " + isPalindrome('testing')); // false
console.log("isPalindrome: " + isPalindrome('tacocat')); // true
console.log("isPalindrome: " + isPalindrome('hannah')); // true
console.log("isPalindrome: " + isPalindrome('robert')); // false


//FOR USE IN BROWSER ONLY, WILL NOT WORK WITH NODE.JS!
function rockPaperScissors(tryAgain, cpuScore = 0, playerScore = 0) {
    // bindings for cpu choice
    let cpuChoice = Math.floor(Math.random() * 3) + 1;
    let signToBeat = "";

    // phrases for different game conditions
    let rockWin = "Rock breaks Scissors.";
    let paperWin = "Paper covers Rock.";
    let scissorsWin = "Scissors cut Paper.";
    let win = "You Win!\n";
    let lose = "You Lose!\n";
    let tie = "You chose the same sign. It's a Tie!\n"
    // let cpuScore = 0;
    // let playerScore = 0;

    // offers user a chance to try again after game is done
    const playAgainPrompt = () => {
        let playAgain = prompt(`You: ${playerScore}\nCPU: ${cpuScore}\n\nWould you like to play again?\n(Yes or No)`);

        playAgain = playAgain.toLowerCase();

        if (playAgain === "yes" || playAgain === "y" || playAgain === "yeah") {
            playAgain = true;
            rockPaperScissors(playAgain, cpuScore, playerScore);
        }

    }

    // encapsulated game logic
    const gameLogic = (choice) => {
        switch (cpuChoice) {
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

        switch (choice) {
            case "rock": {
                alert("\nCPU has selected: " + signToBeat + "!");
                if (signToBeat === "Paper") {
                    cpuScore++;
                    alert(paperWin + lose);
                } else if (signToBeat === "Scissors") {
                    playerScore++;
                    alert(rockWin + win);
                } else if (signToBeat === "Rock") {
                    playerScore++;
                    cpuScore++;
                    alert(tie);
                }
                playAgainPrompt();
                break;
            }
            case "paper": {
                alert("\nCPU has selected: " + signToBeat + "!");
                if (signToBeat === "Paper") {
                    playerScore++;
                    cpuScore++;
                    alert(tie);
                } else if (signToBeat === "Scissors") {
                    cpuScore++;
                    alert(scissorsWin + lose);
                } else if (signToBeat === "Rock") {
                    playerScore++;
                    alert(paperWin + win);
                }
                playAgainPrompt();
                break;
            }
            case "scissors": {
                alert("\nCPU has selected: " + signToBeat + "!");
                if (signToBeat === "Paper") {
                    playerScore++;
                    alert(scissorsWin + win);
                } else if (signToBeat === "Scissors") {
                    playerScore++;
                    cpuScore++;
                    alert(tie);
                } else if (signToBeat === "Rock") {
                    cpuScore++;
                    alert(rockWin + lose);
                }
                playAgainPrompt();
                break;
            }
            default: {
                alert("\nYou must select ROCK, PAPER, or SCISSORS to play!");
                tryAgain = true;
                rockPaperScissors(tryAgain, cpuScore, playerScore);
            }
        }
    }

    let choice;

    if (tryAgain === false || tryAgain === undefined) {
        choice = prompt("Welcome to Rock-Paper-Scissors!\nSelect a Sign to Throw!\n(Rock, Paper, or Scissors)");
    } else {
        choice = prompt("Select a Sign to Throw!\n(Rock, Paper, or Scissors)");
    }

    gameLogic(choice);
}

rockPaperScissors();
