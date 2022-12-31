const body = document.getElementsByTagName("body")[0];
const navToggle = document.querySelector(".primary-header__nav-btn");
const primaryNav = document.querySelector(".navigation--primary");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);

  primaryNav.toggleAttribute("data-visible");
  body.toggleAttribute("data-nav-open");
});
