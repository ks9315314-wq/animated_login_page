
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

const togglePassword =
    document.getElementById("togglePassword");

// Show or hide password
togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.textContent = "Hide";
    } else {
        password.type = "password";
        togglePassword.textContent = "Show";
    }
});

// Form validation demo
form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!email.checkValidity()) {
        message.style.color = "#ffb3b3";
        message.textContent = "Please enter a valid email.";
        email.focus();
        return;
    }

    if (password.value.trim() === "") {
        message.style.color = "#ffb3b3";
        message.textContent = "Please enter your password.";
        password.focus();
        return;
    }

    message.style.color = "#a8ffbf";
    message.textContent =
        "Form submitted successfully! Demo only.";
});

// Demo links
document.getElementById("forgotLink")
    .addEventListener("click", function (event) {
        event.preventDefault();
        message.style.color = "white";
        message.textContent =
            "Password reset is not configured yet.";
    });

document.getElementById("signupLink")
    .addEventListener("click", function (event) {
        event.preventDefault();
        message.style.color = "white";
        message.textContent =
            "Please create a separate Sign Up page.";
    });
