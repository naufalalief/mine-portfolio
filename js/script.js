const toggleBtn = document.getElementById("toggle-btn");
const icon = toggleBtn.querySelector("img");

const isDarkMode = localStorage.getItem("isDarkMode") === "true";

function setDarkMode(isDark) {
  document.body.classList.toggle("dark", isDark);
  icon.src = isDark ? "image/sun.svg" : "image/moon.svg";
  localStorage.setItem("isDarkMode", isDark);
}

if (isDarkMode) {
  setDarkMode(true);
}

toggleBtn.addEventListener("click", function () {
  const isDarkMode = !document.body.classList.contains("dark");
  setDarkMode(isDarkMode);
});
