document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

document.querySelectorAll("[data-placeholder]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    alert("We'll add the real " + link.dataset.placeholder + " here before publishing.");
  });
});

document.getElementById("contact-form").addEventListener("submit", event => {
  event.preventDefault();
  document.querySelector(".form-message").textContent =
    "This is a preview only. We'll connect a secure form service before launch.";
});
