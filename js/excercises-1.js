///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
////    ______                _   _                ////
////    |  ___|              | | (_)               ////
////    | |_ _   _ _ __   ___| |_ _  ___  _ __     ////
////    |  _| | | | '_ \ / __| __| |/ _ \| '_ \    ////
////    | | | |_| | | | | (__| |_| | (_) | | | |   ////
////    \_|  \__,_|_| |_|\___|\__|_|\___/|_| |_|   ////
////                                               ////
////                                               ////
////    ______               _   _                 ////
////    | ___ \             | | (_)                ////
////    | |_/ / __ __ _  ___| |_ _  ___ ___        ////
////    |  __/ '__/ _` |/ __| __| |/ __/ _ \       ////
////    | |  | | | (_| | (__| |_| | (_|  __/       ////
////    \_|  |_|  \__,_|\___|\__|_|\___\___|       ////
////                                               ////
////                                               ////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.

function sum ( x, y ){

    if ( isNaN(numx) || isNaN(numy) ){
      return "Both must be numbers!";
    }

    return x + y;
}

// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.

function avg ( x, y, z ){
  return ( Number(x) + Number(y) + Number(z)) / 3;
}

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

function getLength (aString){
  return aString.length;
}


// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.

function greaterThan (param1, param2){
  return param1 < param2;
}

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.

function greet (name){
  return "Hello, " + name;
}

// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"

function madlib (word1, word2, word3, word4){
  return "Iron " + word1 + " Frontend " + word2 + " Class is " + word3 + "! WhooHoo !! " + word4 + ", YEAH !!"
}

// MADLIB RESULTS
// madlib("Yard", "Dev", "Awesome", "JavaScript")
// "Iron Yard Frontend Dev Class is Awesome! WhooHoo !! JavaScript, YEAH !!"

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
