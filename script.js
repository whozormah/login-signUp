"use strict";

const signUpBtn = document.getElementById("signUpbtn");
const signInBtn = document.getElementById("signInbtn");
const title = document.getElementById("tile");
const nameFields = document.querySelectorAll("#noSign");

signInBtn.addEventListener("click", function () {
  nameFields.forEach((nameField) => {
    nameField.style.display = "none";
  });
});
