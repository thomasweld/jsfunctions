// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max( x, y ){
  if (x > y){
    return x;
  } else {
      return y;
    }
}


// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(num1, num2, num3){
  return Math.max(num1, num2, num3);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){

  char = char.toLowerCase();

  if ( char === "a" ){
    return true;
  } else  if (char === "e"){
    return true;
  } else  if (char === "i"){
      return true;
    } else  if (char === "o"){
    return true;
  } else  if (char === "u"){
    return true;
  } else {
    return false;
  }
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
  phrase = phrase.toLowerCase();
  var n = phrase.search(/[aeiuo]/);
  switch (n){
    case 0: phrase = phrase.
  }
}


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(){
    //...
}
