let display = document.getElementById("display");
function appendToDisplay(value){
  display.value += value;
}
function clearDisplay(){
  display.value = "";
}
function backspace() {
  display.value = display.value.slice(0, -1); // Remove last character
}
function calculateResult(){
  try{
    display.value = eval(display.value);
  } catch{
    display.value = "Error";
  }
}