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

const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", event => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const inquiryType = String(formData.get("type") || "General inquiry");
  const message = String(formData.get("message") || "").trim();
  const subject = `Website inquiry: ${inquiryType}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Inquiry type: ${inquiryType}`,
    "",
    "Message:",
    message
  ].join("\n");

  const mailto = `mailto:revrsecowgirl@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector(".form-message").textContent =
    "Your email app should open with your inquiry filled in. Please review it and press Send there.";
  window.location.href = mailto;
});
