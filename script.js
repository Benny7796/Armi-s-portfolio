document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("themeSwitcher");
  const body = document.body;

  // Load saved theme from localStorage
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-mode");
    themeSwitcher.checked = true;
  }

  themeSwitcher.addEventListener("change", () => {
    if (themeSwitcher.checked) {
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
    }
  });
});
