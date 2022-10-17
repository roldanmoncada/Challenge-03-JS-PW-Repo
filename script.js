// Assignment code here
//Created variable of all possible characters for a secure password. Also created empty array variable for the user's input for what type of pw they want to generate.
// ^^^Learned that a single variable with all of these is not as efficient as I thought it would be. Setting a const with the 4 separate types of characters would be better.
const aLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const spChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '.', '/', ':', ';', '<', '>', '"', "'", '[', ']', '_', '`', '~', '|'];
const aUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  return
}