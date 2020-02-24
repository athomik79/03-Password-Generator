// Dom elements
var resultEl = document.getElementById("result");
var lengthEl = document.getElementById("length");
var uppercaseEl = document.getElementById("uppercase");
var lowercaseEl = document.getElementById("lowercase");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");
var clipboardEl = document.getElementById("clipboard");

// Add functions to object randomFunc
var randomFunc = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// Generate event listen
generateEl.addEventListener("click", () => {
    var length = +lengthEl.value;
    var hasUpper = uppercaseEl.checked;
    var hasLower = lowercaseEl.checked;
    var hasNumber = numberEl.checked;
    var hasSymbol = symbolEl.checked;

    // console.log(hasLower, hasUpper, hasNumber, hasSymbol)
    
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});

// Generator functions
// from charCode method on String object

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }
 
 function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
 }
 
 function getRandomNumber () {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 
 function getRandomSymbol () {
  var symbols = "!@$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
 }

    //  console.log(getRandomLower());