const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");

console.log(toggleBtn);
toggleBtn.addEventListener("click", () => {
  console.log("clicked");
  console.log(navLinks);
  navLinks.classList.toggle("active");
});
