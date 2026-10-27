const menuButton = document.querySelector(".menu-toggle");
const header = menuButton.closest("header");

menuButton.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(expanded));
  header.classList.toggle("menu-open", expanded);
});

header.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuButton.setAttribute("aria-expanded", "false");
    header.classList.remove("menu-open");
  });
});
