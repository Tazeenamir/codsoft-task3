document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const clearButton = document.getElementById("clear");
    const deleteButton = document.getElementById("delete");
  
    let currentInput = "";
  
    function updateDisplay() {
      display.textContent = currentInput || "0";
    }
  
    function handleDigitClick(digit) {
      currentInput += digit;
      updateDisplay();
    }
  
    function handleOperatorClick(operator) {
      if (currentInput !== "") {
        if (operator === "=") {
          try {
            currentInput = eval(currentInput).toString();
          } catch (error) {
            currentInput = "Error";
          }
        } else if (operator === "DEL") {
          currentInput = currentInput.slice(0, -1);
        } else {
          currentInput += operator;
        }
        updateDisplay();
      }
    }
  
    clearButton.addEventListener("click", () => {
      currentInput = "";
      updateDisplay();
    });
  
    deleteButton.addEventListener("click", () => {
      handleOperatorClick("DEL");
    });
    for (let i = 0; i <= 9; i++) {
      const digitButton = document.getElementById(`digit${i}`);
      digitButton.addEventListener("click", () => {
        handleDigitClick(i);
      });
    }
    const operators = ["+", "-", "*", "/", "="];
    for (const operator of operators) {
      const operatorButton = document.createElement("button");
      operatorButton.textContent = operator;
      operatorButton.className = `btn operator`;
      operatorButton.addEventListener("click", () => {
        handleOperatorClick(operator);
      });
      document.querySelector(".calculator").appendChild(operatorButton);
    }
  });
  
  