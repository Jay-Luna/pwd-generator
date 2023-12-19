// Assignment code here


/* peseudo 
1. click button to generate prompts
2. select which criteria to include when prompted for password criteria
3.create a prompt for length of password
4. choose a length of at least 8 characters & no more than 128 characters
*/

var length = 8;
var hasUpper = true;
var hasLower = true;
var hasNumeric = true;
var hasSpecialChar = true;
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Take all criteria to generate password
function generatePassword() {
  // var uppercase = confirm("Your password should have an uppercase letter! Click OK to continue");
  // var keyLength = prompt("Password must be between 8 and 128 characters! Click OK to continue");

  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()?.<\>|=+:;,[-_]";
  var numericValues = "0123456789";
  var allCharOptions = [];

  if (hasUpper) { allCharOptions += uppercaseChars; }
  if (hasLower) { allCharOptions += lowercaseChars }
  if (hasSpecialChar) { allCharOptions += specialChars; }
  if (hasNumeric) { allCharOptions += numericValues; }

  // create a password that is length of 8
  for (var i = 0; i < length; i++) {
    let randomIndex = [Math.floor(Math.random() * allCharOptions.length)];
    password = password + allCharOptions[randomIndex];
  }
}

// Write password to the #password input
function writePassword() {
  password = "";
  generatePassword();

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
