document.addEventListener('DOMContentLoaded', () => {
    var inputText = document.querySelector(".input_text");
    var btn = document.querySelector(".input_btn");
    var textDisplay = document.querySelector(".input_display");
  
    btn.addEventListener('click', () => {
      try {
        if (!isNaN(parseInt(inputText.value))) {
          let cal = (parseInt(inputText.value) * 9 / 5) + 32;
          textDisplay.innerHTML = cal + " °F";
          inputText.value = "";
        } else {
          inputText.value = "";
          throw("Enter a number");
        }
      } catch (e) {
        textDisplay.innerHTML = e;
      }
    });
  
    inputText.addEventListener('keydown', (event) => {
      if (event.keyCode == 13) {
        try {
          if (!isNaN(parseInt(inputText.value))) {
            let cal = (parseInt(inputText.value) * 9 / 5) + 32;
            textDisplay.innerHTML = cal + " °F";
            inputText.value = "";
          } else {
            inputText.value = "";
            throw("Enter a number");
          }
        } catch (e) {
          textDisplay.innerHTML = e;
        }
      }
    });
  });
  