const ButtonElement = document.querySelectorAll(".btn");
const display = document.querySelector("#scr");
ButtonElement.forEach(function(button) {
  button.addEventListener("click", calculate);
});
function calculate(event) {
  const clickedButtonValue = event.target.value;
  if (clickedButtonValue === "=") {
    if (display.value !== "") {
      display.value = eval(display.value);
    }
  }
   else if (clickedButtonValue ==='←')
        {
           let str = document.querySelector("#scr").value;
           document.querySelector("#scr").value = str.substring(0,str.length-1);
      }
   else if(clickedButtonValue === 'C' ) {
    display.value = "";
  } else {
    display.value=display.value+ clickedButtonValue;
  }
}
