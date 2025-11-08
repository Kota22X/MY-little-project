// Wait until the page is loaded before running anything
window.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle-theme");
  const body = document.body;

  // Check saved theme when page loads
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  // Button click to toggle theme
  button.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Save current theme
    const theme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  });
});
