const toggleButton = document.getElementById("menuToggle") as HTMLButtonElement;
const navLinks = document.getElementById("navLinks") as HTMLUListElement;

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
  navLinks.classList.toggle("active");
});
