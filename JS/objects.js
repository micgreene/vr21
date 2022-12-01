let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "https://bit.ly/2ysFran"
  };
  
    //   Write the command to add the language “Go” to the end of the languages array.
    //   Change the difficulty to the value of 7.
    //   Using the delete keyword, write the command to remove the jokes key from the programming object.
    //   Write the command to add a new key called isFun and a value of true to the programming object.
  
    programming.languages.push("Go");
    console.log("\nPush Go into languages array: " + programming.languages);

    programming.languages.difficulty = 7;
    console.log("\nprogramming.difficulty == " + programming.difficulty);

    delete programming.jokes;
    console.log("\nDelete the joke property from programming object: \n" + JSON.stringify(programming));

    programming["isFun"] = true;
    console.log("\nAdding isFun property to programming object: " + programming.isFun);

    console.log("Final programming object: " + JSON.stringify(programming));