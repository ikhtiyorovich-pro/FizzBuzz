var elForm = document.querySelector(".form");
var elInput = elForm.querySelector(".input");
var elSubmit = elForm.querySelector(".button");
var elResult = document.querySelector(".result");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();

  var input = Number(elInput.value.trim(), 10);
  if (input % 3 === 0 && input % 5 === 0) {
    elResult.textContent = "FizzBuzz";
  } else if (input % 3 === 0) {
    elResult.textContent = "Fizz";
  } else if (input % 5 === 0) {
    elResult.textContent = "Buzz";
  } else {
    elResult.textContent = input;
  }
  // input % 3 === 0 && input % 5 === 0 ? elResult.textContent = "FizzBuzz" : input % 3 === 0 ? elResult.textContent="Fizz" : input % 5 === 0
  elInput.value = null;
});
