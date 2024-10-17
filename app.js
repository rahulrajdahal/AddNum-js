const firstNumberBox = document.getElementById("firstNum");
const secondNumberBox = document.getElementById("secondNum");
const resultBox = document.getElementById("result");
const addButton = document.querySelector(".form__button");

const addNumbers = () => {
  const first = firstNumberBox.value;
  const second = secondNumberBox.value;
  resultBox.value = parseFloat(first) + parseFloat(second);
};
