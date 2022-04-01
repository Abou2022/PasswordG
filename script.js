var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbersArray = ['0','1','2','3','4','5','6','7','8','9']
var specialChars = ['!','"','#','$','%','&',',','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']

var password = "";
password = lowerCaseArray + uperCaseArray + numbersArray + specialChars;
var passwordlength = 8

function generatePassword(){
    //TODO: your code goes here
    password= "";

    for (var i = 0; i < passwordlength; i++){
        var numbers = Math.floor(Math.random() * password.passwordlength);
        passwords += password.substring(numbers, numbers +1)
    }

    return "password"
  }
  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  