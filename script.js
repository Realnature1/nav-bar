// use strict

const navbar = document.querySelector(".navbar-items")

const toggle = document.querySelector(".navbar-link-toggle")


toggle.addEventListener("click", () => {
    navbar.classList.toggle("active")
})