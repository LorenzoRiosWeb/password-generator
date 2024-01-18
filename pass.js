// Assignment code here
var generateBtn = document.querySelector("#generate");

// Get references to the #generate element
var criteria = {
// Password min of 8 and max of 128 characters
  minChar : 8,
  maxChar: 128,
// Created Different Arrays that contains data for each list
  lowerCase: ["abcdefghijklmnopqrstuvxwyz"],
  upperCase: ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  specialChar: [""],
  num: ["0123456789"],

  userPass:[]
}
//ask weather or not to include lowercase, uppercase, numeric, and/or special characters
function validation() {
  var lowerCaseIn = confirm('Would you like lowercase letters?');
  console.log(lowerCaseIn);

  var upperCaseIn = confirm('Would you like uppercase letters?');
  console.log(upperCaseIn);

  var specialCharIn = confirm('Would you like special characters?');
  console.log(specialCharIn);

  var numIn = confirm('Would you like numbers?');
  console.log(numIn);
//Checks the users response to see if it === True if false won't add the option they said no too. 
  if (lowerCaseIn === true){
    criteria.userPass.push(criteria.lowerCase);
  }
  if (upperCaseIn === true){
    criteria.userPass.push(criteria.upperCase);
  }
  if (specialCharIn === true){
    criteria.userPass.push(criteria.specialChar);
  }
  if (numIn === true){
    criteria.userPass.push(criteria.num);
  }
//Will alert the user to pick one of the option provided for a password.
  if(lowerCaseIn === false && upperCaseIn === false && specialCharIn === false && numIn ===false) {
    alert("None of the criteria was accepted, please specify more.")
  }
  // Will return the users pass joined together
  passResponse = criteria.userPass.join();

  return passResponse;
}

function generatePassword() {
  // Asks the user how long they would like their password
    var passLength = prompt("How long would you like your password (8-128 characters");

  // The if statment compares the password lengths
  if(passLength >= criteria.minChar && passLength <= criteria.maxChar );
  validation();

  if(passResponse.length > criteria.userPass.length){
  //var l establishes a string  
  var l = ""

  for(let i =0; i < passLength; i++){

    l += passResponse.charAt(Math.floor(Math.random() * passResponse.length));

    console.log(l);
  }

  return l;
  }else {
  alert("Please input a number between 8 and 128");
}
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);