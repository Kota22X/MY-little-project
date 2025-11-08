// theme.js
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-theme");
  const body = document.body;

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    if (button) button.textContent = "☀️";
  } else {
    body.classList.remove("light-mode");
    if (button) button.textContent = "🌙";
  }

  // Toggle theme if button exists
  if (button) {
    button.addEventListener("click", () => {
      body.classList.toggle("light-mode");
      if (body.classList.contains("light-mode")) {
        button.textContent = "☀️";
        localStorage.setItem("theme", "light");
      } else {
        button.textContent = "🌙";
        localStorage.setItem("theme", "dark");
      }
    });
  }
});
