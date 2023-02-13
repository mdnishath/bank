// get input value by id
function getElemntValueByID(id) {
  const inputElement = document.getElementById(id);
  const inputNumber = parseFloat(inputElement.value);
  inputElement.value = "";
  return inputNumber;
}

// get element value

function getElementTextValueByID(id) {
  const element = document.getElementById(id);
  const elementValue = parseFloat(element.innerText);
  return elementValue;
}

// set element value

function setElementValue(id, value) {
  const element = document.getElementById(id);
  return (element.innerText = value);
}

// to fixed balance
function fixedValue(amount) {
  return amount.toFixed(2);
}
