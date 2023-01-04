// Mobile navigation
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

//Tabs
const tabs = [...document.querySelectorAll(".tabs__link")];
const panels = [...document.querySelectorAll(".tabs__tab-pane")];

const handleTabClick = (e) => {
  const panelToControl = e.currentTarget.getAttribute("aria-controls");

  panels.forEach((panel) => {
    panel.setAttribute(
      "aria-hidden",
      `${panel.id === panelToControl ? false : true}`
    );
  });

  tabs.forEach((tab) => {
    tab.setAttribute("aria-selected", tab === e.currentTarget ? true : false);
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});

//Accordion
const accordionToggles = document.querySelectorAll(".accordion__toggle");

accordionToggles.forEach((accordion) => {
  accordion.onclick = function () {
    console.log(accordionToggles);

    this.classList.toggle("accordion__toggle--open");

    this.setAttribute(
      "aria-expanded",
      this.getAttribute("aria-expanded") === "false" ? true : false
    );

    let content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  };
});
