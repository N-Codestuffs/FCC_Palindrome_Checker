// Get HTML data
const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

// checks the input when the button is pressed
function check() {

  //trim() removes the spaces on either side of the input and makes it readable
  const rawText = textInput.value.trim();
  let filterText;
  

  if (rawText == "")
    alert("Please input a value");
  else{
    palCheck (rawText);
  }

}

// filters input and checks for a palindrome
function palCheck(rawText) {

  let palinTrue = true;
  let filterText = rawText.toLowerCase();

  //remove all non-alphanumeric characters with an empty string
  filterText = filterText.replaceAll(/[^a-z0-9]/g,"");
  console.log(filterText);

  // check for palindrome
  for (let i = 0; i < filterText.length; i++) {
    if (filterText[i] !== filterText[filterText.length - (i + 1)]) {
      result.textContent = rawText + " is not a palindrome";
      palinTrue = false;
      break;
    }

    if (palinTrue){
      result.textContent = rawText + " is a palindrome";
    }
  }

}