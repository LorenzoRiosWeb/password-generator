// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var password = {
// Password min of 8 and max of 128 characters
  minChar : 8,
  maxChar: 128,
// Created Different Arrays that contains data for each list
  lowerCase: ["abcdefghijklmnopqrstuvxwyz"],
  UpperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  specialChar: [""],
  num: ["0123456789"],
}
//ask weather or not to include lowercase, uppercase, numeric, and/or special characters
function passwordCriteria(){
  var lowerCaseIN = confirm('Would you like lowercase letters?');
  console.log(lowerCaseIn);

  var upperCaseIN = confirm('Would you like uppercase letters?');
  console.log(lowerCaseIn);

  var specialCharIN = confirm('Would you like special characters?');
  console.log(lowerCaseIn);

  var numIN = confirm('Would you like numbers?');
  console.log(lowerCaseIn);
}


// Write password to the #password input
function generatePassword(){

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);