"use strict";

const signUpBtn = document.getElementById("signUpbtn");
const signInBtn = document.getElementById("signInbtn");
const title = document.getElementById("tile");
const nameFields = document.querySelectorAll("#noSign");

signInBtn.addEventListener("click", function () {
  nameFields.forEach((nameField) => {
    nameField.style.maxHeight = "0";
  });
  title.textContent = "Sign In";
  signUpBtn.classList.add("disable");
  signInBtn.classList.remove("disable");
});

signUpBtn.addEventListener("click", function () {
  nameFields.forEach((nameField) => {
    nameField.style.maxHeight = "65px";
  });
  title.textContent = "Sign Up";
  signUpBtn.classList.remove("disable");
  signInBtn.classList.add("disable");
});
