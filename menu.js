var toggleButton = document.getElementById("menuToggle");
var navLinks = document.getElementById("navLinks");
toggleButton.addEventListener("click", function () {
    toggleButton.classList.toggle("active");
    navLinks.classList.toggle("active");
});
