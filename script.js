"use strict";
// Select Elements
const submitBtn = document.getElementById("submitBtn");
const inputs = Array.from(document.querySelectorAll("input"));
const invalidFeedback = Array.from(document.querySelectorAll(".invalid-feedback"));

// Handle Inputs Validation
var emailRegexp = /^[^@]+@[^@]+\.[^@]+$/;

function checkInputs(){
    inputs.forEach((input, i) => {
        if (i !== 2){        if (input.value !== ""){
            input.classList.add("valid");
            input.classList.remove("invalid");
            input.nextElementSibling.classList.add("hide");
        }
        else{
            input.classList.add("invalid");
            input.classList.remove("valid");
            input.nextElementSibling.classList.remove("hide");
        }}
        if (i == 2){
            if (emailRegexp.test(inputs[2].value)){
                input.classList.add("valid");
                input.classList.remove("invalid");
                input.nextElementSibling.classList.add("hide");
            }
            else{
                input.classList.add("invalid");
                input.classList.remove("valid");
                input.nextElementSibling.classList.remove("hide");
        }
        }
    })
}

function checkValid(){
    return inputs.every(input => !input.classList.contains("invalid"));
}

document.querySelector("form").addEventListener("submit", (e)=>e.preventDefault())

submitBtn.addEventListener("click", () => {
    checkInputs();
    if (checkValid()){
        // Popup Toast
        Swal.fire({
            toast: true,
            text: "Thank you for filling our form",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
            position: "top",
        });
        inputs.forEach(input => input.value = "");
        invalidFeedback.forEach(f => f.classList.add("hide"));
    }
    else{
        Swal.fire({
            title: "Please enter a valid input!",
            icon: "warning"
          });
    }
})