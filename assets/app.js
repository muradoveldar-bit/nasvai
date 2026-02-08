const yearTargets = document.querySelectorAll("[data-year]");
const currentYear = new Date().getFullYear();

for (const target of yearTargets) {
  target.textContent = currentYear;
}
