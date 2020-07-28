// function DigitSum() {
//   var number = document.getElementById("takeValue");
//   var numberValue = number.value;
//   var splitNum = numberValue.split("");

//   var x = document.getElementById("para");

//   parsedNum = splitNum.map(function (x) {
//     return parseInt(x, 10);
//   });

//   var sum = parsedNum.reduce(function (a, b) {
//     return a + b;
//   }, 0);

//   var firstSum = document.getElementById("firstSum");
//   firstSum.value = sum;

//   firstSumSplit = firstSum.value.split("");

//   parsedSum = firstSumSplit.map(function (x) {
//     return parseInt(x, 10);
//   });

//   var finalSum = parsedSum.reduce(function (a, b) {
//     return a + b;
//   }, 0);

//   x.innerHTML = finalSum;

//   if (sum === 7) {
//     alert("success");
//   } else {
//     if (finalSum === 7) {
//       alert("success");
//     } else {
//       alert("fail");
//     }
//   }
// }

function shortOne() {
  var number = document.getElementById("takeValue").value.split("");
  parsedNumber = number.map((x) => parseInt(x, 10));

  var sum = parsedNumber.reduce((a, b) => a + b, 0);

  secondNumber = document.getElementById("firstSum");
  secondNumber.value = sum;
  splitSecond = secondNumber.value.split("");

  parsedSecond = splitSecond.map((x) => parseInt(x, 10));

  finalSum = parsedSecond.reduce((a, b) => a + b, 0);

  if (sum === 7) {
    alert("success");
  } else {
    if (finalSum === 7) {
      alert("success");
    } else {
      alert("fail");
    }
  }
}
