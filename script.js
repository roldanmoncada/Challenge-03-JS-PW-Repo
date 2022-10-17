// Assignment code here
//Created variable of all possible characters for a secure password. Also created empty array variable for the user's input for what type of pw they want to generate.
// ^^^Learned that a single variable with all of these is not as efficient as I thought it would be. Setting a const with the 4 separate types of characters would be better. The benefit of "const" vs "var" is that the former is localized to a given code block. Since this will all be one big block, let seems to be most appropriate and seems like a best practice for the future.
const aLow = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const spChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '=', '.', '/', ':', ';', '<', '>', '"', "'", '[', ']', '_', '`', '~', '|'];
const aUp = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// researched the benefit of the "let" variables vs "var" variables. Main benefit is the fact that "let" localizes the variable to the ensuing code block, if I understood it correctly. Also, it creates a local variable which can reduce confusion if all variables had been globalized previously. The use of const applies here as well, especially given the new context of "let" being best for variables localized to a particular block of code.
// discovered benefits of arrow functions. 
const writePassword = () => {
  const pwLength = generatePassword()
  const pwCriteria = passwordCriteria()

  let password = randoPW(pwLength, pwCriteria);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Define the constants in the above function.
//Figured out how to do the window prompt thing!!!!
const generatePassword = () => {
  let pwLength = window.prompt("How many characters would you like your password to contain?")
}


function generatePassword() {
  return
}