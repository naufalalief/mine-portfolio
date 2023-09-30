const toggleBtn = document.getElementById("toggle-btn");
const icon = toggleBtn.querySelector("img");

const isDarkMode = localStorage.getItem("isDarkMode") === "true";
if (isDarkMode) {
  document.body.classList.add("dark");
  icon.src = "image/sun.svg";
} else {
  document.body.classList.remove("dark");
  icon.src = "image/moon.svg";
}

toggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark");
  const isDarkMode = document.body.classList.contains("dark");
  icon.src = isDarkMode ? "image/sun.svg" : "image/moon.svg";

  localStorage.setItem("isDarkMode", isDarkMode);
});
