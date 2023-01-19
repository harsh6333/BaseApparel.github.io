const btn = document.querySelector(".btn");
const errorlogo = document.getElementById("error-logo");
const errorpop = document.getElementById("er2");
const emailInp = document.querySelector(".email1");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function Checkerror() {
    btn.addEventListener("click", () => {
        const inputValue = emailInp.value;
        if (inputValue === "") {
            errorpop.style.display = "block";
            errorlogo.style.display = "block";
            emailInp.style.border = "2px solid hsl(0, 69%, 49%)";
        } else if (!validate(inputValue)) {
            errorpop.style.display = "block";
            errorlogo.style.display = "block";
            emailInp.style.border = "2px solid hsl(0, 69%, 49%)";
        } else {
            errorpop.style.display = "none";
            errorlogo.style.display = "none";
            emailInp.style.border = "1px solid hsla(0, 36%, 70%, 0.6)";
        }
    });
}

function validate(email) {
    return emailRegex.test(email);
}

Checkerror();