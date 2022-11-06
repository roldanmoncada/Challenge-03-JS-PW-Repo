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
// const writePassword = () => {
//   const pwLength = generatePassword()
//   const pwCriteria = pwCriteria()

//   let password = createdPW(pwLength, pwCriteria);
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

// 

// Add event listener to generate button

//Define the constants in the above function.
//Figured out how to do the window prompt thing!!!! --> window.prompt() is not necessary, can just be prompt.()
// Implemented "while" loop with ternary operators in order to let the users know if their request exists outside of the acceptable criteria and pop-up an "alert" explaining what their error is/was.

//Define constant of "pwCriteria" and creating if/else if statements for all items requested by the acceptance criteria.
//Continuing usage of arrow functions.
//Confirm object is what we need for the prompts that ask if the user would like a certain character for their new pw.
const pwCriteria = () => {

  let pwCombo
  let enableLower = confirm("Would you like Lowercase letters in your password?")
  let enableUpper = confirm("Would you like to have Uppercase letters in your password?")
  let enableNumber = confirm("Would you like to have Numbers in your password?")
  let enableSpecial = confirm("Would you like to have Special Characters in your password?")

  // waterfall of if statements to check for any and all combinations of possible user selections.
  if (!enableLower && !enableUpper && !enableNumber && !enableSpecial) {
    alert("At least one (1) criteria must be selected.")
    //as the string above implies, this is to see if any of the criteria were selected, if not (as denoted by the ! in front of the let variable name) then an alert pops up with instructions/details.
  }
  
  else if (enableLower && enableUpper && enableNumber && enableSpecial) {
    pwCombo = aLow.concat(aUp, numbers, spChar)
    //creates PW based on the selection of all character options.
  }
  
  else if (enableLower && enableUpper && enableNumber) {
    pwCombo = aLow.concat(aUp, numbers)
    //Creates PW combo based on selection of Lowercase letters, Uppercase letters, and Numbers
  }
  
  else if (enableLower && enableUpper && enableSpecial) {
    pwCombo = aLow.concat(aUp, spChar)
    // PW combo based on lower, upper, and special characters.
  }
  
  else if (enableLower && enableNumber && enableSpecial) {
    pwCombo = aLow.concat(numbers, spChar)
    // PW combo based on lower, numbers, and special characters.
  }

  //this next chunk is of the else if statements consisting of two criteria chosen by the user.
  else if (enableLower && enableUpper) {
    pwCombo = aLow.concat(aUp)
  }
    
  else if (enableLower && enableNumber) {
    pwCombo = aLow.concat(numbers)
  }

  else if (enableLower && enableSpecial) {
    pwCombo = aLow.concat(spChar)
  }

  else if (enableUpper && enableNumber) {
    pwCombo = aUp.concat(numbers)
  }
  
  else if (enableUpper && enableSpecial) {
    pwCombo = aUp.concat(spChar)
  }

  else if (enableNumber && enableSpecial) {
    pwCombo = numbers.concat(spChar)
  }

  // this next chuck is of the else/if statements consisting of just one criteria selected by the user.
  else if (enableLower) {
    pwCombo = aLow 
  }

  else if (enableUpper) {
    pwCombo = aUp
  }

  else if (enableNumber) {
    pwCombo = numbers
  }

  else if (enableSpecial) {
    pwCombo = spChar
  }
  return pwCombo
}

const createdPW = (pwLength, pwCriteria) => {
  let randomPW = []
  //created variable randomPW as an empty array that will store our new password.
  for (let i = 0; i < pwLength; i++) {
    let newPW = pwCriteria[Math.floor(Math.random() * pwCriteria.length - 1)]
    randomPW.push(newPW)
  }

let finalizedPW = randomPW.join("")
  return finalizedPW;
}


const generatePassword = () => {
  let pwLength = prompt("How many characters would you like your password to contain?")

  while (pwLength <= 7 || pwLength >= 129) {
    alert("Password *must* be between 8 and 128 characters in length.")
    
    pwLength = prompt("How many characters would you like your new password to contain?")
  }
  return pwLength;
}

generateBtn.addEventListener("click", ()=>{
  let length= generatePassword();
  let pool = pwCriteria();
  let value = createdPW(length, pool);
  document.getElementById('password').textContent = value});

  //stopped working out of nowhere but now works. pushing to github asap.
