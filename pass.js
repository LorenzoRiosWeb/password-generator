// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var password = {
  minChar : 8,
  maxChar: 20,

  lowerCase: ["abcdefghijklmnopqrstuvxwyz"],
  UpperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  specialChar: [""],
  num: ["0123456789"],
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passwordText);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);