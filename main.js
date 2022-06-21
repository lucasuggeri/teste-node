const submitButton = document.querySelector("#submit-button");
const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

submitButton.addEventListener("click", function (e) {
  e.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === "" || emailValue === "") {
    return alert("Please fill out all the fields!");
  }
  myForm.style.background = "green";
  setInterval(function () {
    myForm.style.background = "#f4f4f4";
  }, 400);
  const items = document.querySelector(".items");
  items.firstElementChild.textContent = nameValue;
  items.children[1].textContent = emailValue;
  myForm.reset();
});
