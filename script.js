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

// Generate password function
function generatePassword(lower, upper, number, symbol, length) {
    // 1. Init pw var
    // 2. Filter out unchecked types
    // 3. Loop over length call generator function for each type
    // 4. Add final pw to the pw var and return

    let generatePassword = "";

    var typesCount =  upper + lower + number + symbol;

    // console.log("typesCount: ", typesCount);

    var typesArr = [{upper}, {lower}, {number}, {symbol}].filter
    (
        item => Object.values(item)[0]
    );

    // console.log("typesArr: ", typesArr);

    if(typesCount === 0) {
        return "";
    }

    for(let i = 0; i < length; i += typesCount) {
        typesArr.forEach(type => {
            var funcName = Object.keys(type)[0];

        // console.log("funcName: ", funcName);

            generatePassword += randomFunc[funcName]();
          });
        }

        // console.log(generatePassword);

        var finalPassword = generatePassword.slice(0, length);

        return finalPassword;
    }

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