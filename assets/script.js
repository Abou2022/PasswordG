function generatePassword(){
//TODO: your code goes here
//======= Assigning variables======
//lowercase array
var lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
//upercase array
var upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//number array
var numbersArray = ['0','1','2','3','4','5','6','7','8','9']
//special chars array
var specialChars = ['!','"','#','$','%','&',',','(',')','*','+','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']
//piggybank array
var piggybank= [];
//output password
var password= [];
//=============== promps / storing responses====
var passwordlength = prompt("the password is between 8 and 128");

if((passwordlength <8 || passwordlength >128)){
  return alert("the password is between 8 and 128");
}
//how long ()is the password
var lowerChoise = confirm("Do you want lowerCase letter?");
var upperChoise = confirm("Do you want upperCase letter?");
var numbersChoise = confirm("Do you want number?");
var specialCharsChoise = confirm("Do you want special charactere?");

//lowercase? (if yes ) store in empty piggybank array
if(lowerChoise ===true){
  piggybank = piggybank.concat(lowerCaseArray)
}
if (upperChoise===true){
  piggybank = piggybank.concat(upperCaseArray)
}
//number? (if yes ) store in empty piggybank array -  password
if (numbersChoise===true){
  piggybank = piggybank.concat(numbersArray)
}
//special chars ? (if yes) store in empty piggybank array
if (specialCharsChoise===true){
  piggybank = piggybank.concat(specialChars)
}

console.log(piggybank)

//for loop grab random chars from piggybank array - password length (tempArray)
    for (var i = 0; i < passwordlength; i++){
     // how to get random index from array
      var randomItem = piggybank[Math.floor(Math.random()*piggybank.length)];
      //push random chars into password array
       password.push(randomItem)
    }
    //return password //print generated password onto page 
    return password.join('');
  }
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
   var generateBtn = document.querySelector("#generate");
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);//help to
  