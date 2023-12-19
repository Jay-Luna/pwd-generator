// Default values for criteria variables
var length = 0;
var hasUpper = true;
var hasLower = true;
var hasNumeric = true;
var hasSpecialChar = true;
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Show user criteria prompts pop-up
function generatePrompts() {
  length = prompt("Password length must be between 8 and 128 characters:");

  // if cancel was selected, exit logic
  if (length == null) {
    exit;
  } else if (length < 8 || length > 128) {
    // if password length is not between 8 & 128
    // then show alert and show length prompt again.
    alert("Password length is not a valid input.");
    generatePrompts();
  }

  hasUpper = confirm("Click 'OK' to include uppercase letters or 'Cancel' to not include.");
  hasLower = confirm("Click 'OK' to include lowercase letters or 'Cancel' to not include.");
  hasNumeric = confirm("Click 'OK' to include numeric characters or 'Cancel' to not include.");
  hasSpecialChar = confirm("Click 'OK' to include special characters or 'Cancel' to not include.");

  // if all criteria are not selected then show alert and show prompts again.
  if (!hasUpper && !hasLower && !hasNumeric && !hasSpecialChar) {
    alert("Criteria not meet. Must include at least 1 character type.");
    generatePrompts();
  }
}

// Method to generate a random password based on a selected criteria
function generatePassword() {
  // characters needed to generate password string
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var specialChars = "!@#$%^&*()?.<\>|=+:;,[-_]";
  var numericValues = "0123456789";
  var allCharOptions = [];

  // based on user selection add criteria options to allCharOptions array
  if (hasUpper) {
    allCharOptions += uppercaseChars;
  }
  if (hasLower) {
    allCharOptions += lowercaseChars;
  }
  if (hasSpecialChar) {
    allCharOptions += specialChars;
  }
  if (hasNumeric) {
    allCharOptions += numericValues;
  }

  // generate a password with the length criteria
  for (var i = 0; i < length; i++) {
    // get random position in allCharOptions array
    let randomIndex = [Math.floor(Math.random() * allCharOptions.length)];
    // add random value to password getting generated
    password = password + allCharOptions[randomIndex];
  }
}

// Write password to the #password input
function writePassword() {
  password = ""; // clears password box initially

  generatePrompts(); // calls generatePrompts function
  generatePassword(); // calls generatePassword function

  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
