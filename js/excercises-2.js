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
  var vowels = "aeiou";
  var response = vowels.indexOf(char);
  if (respnose === -1){
    return false;
  }
  return true;
}


// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function translate(phrase){

  var vowels = "aeiou ";
  var result = "";

  for (var i = 0; i < phrase.length; i++) {
    var current = phrase[i];
    if (vowels.indexOf(current) === -1){
      result += current + "o" + current;
    } else {
      result += current;
    }
  }

  return result;
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
  var str = str.split('').reverse().join('');
  return str;
}
