const firstNumberBox = document.getElementById("firstNum");
const secondNumberBox = document.getElementById("secondNum");
const resultBox = document.getElementById("result");
const addButton = document.querySelector(".form__button");

let first, second;

const addNumbers = () => {
  first = firstNumberBox.value;
  second = secondNumberBox.value;
  resultBox.value = `The result is ${parseFloat(first) + parseFloat(second)}`;
};

const subtractNumbers = () => {
  first = firstNumberBox.value;
  second = secondNumberBox.value;
  resultBox.value = `The result is ${parseFloat(first) - parseFloat(second)}`;
};

const multiplyNumbers = () => {
  first = firstNumberBox.value;
  second = secondNumberBox.value;
  resultBox.value = `The result is ${parseFloat(first) * parseFloat(second)}`;
};

const divideNumbers = () => {
  first = firstNumberBox.value;
  second = secondNumberBox.value;
  resultBox.value = `The result is ${parseFloat(first) / parseFloat(second)}`;
};
