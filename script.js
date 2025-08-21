document.addEventListener("DOMContentLoaded", () => {
  const themeSwitcher = document.getElementById("themeSwitcher");
  const body = document.body;
  const workLink = document.querySelector(".links a:nth-child(2)"); // the "Work" link
  const contactLink = document.getElementById("Contact");

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

  // Attach smooth scroll to Work link
  workLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("thirdSection").scrollIntoView({ behavior: "smooth" });
  });


contactLink.addEventListener("click", (g) => {
  g.preventDefault();
  document.getElementById("footer").scrollIntoView({behavior: "smooth", block: "start"});
});

});