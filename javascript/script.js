const menuicon = document.getElementById("menu-icon"),
  menuLinks = document.getElementById("menu");
menuicon.addEventListener("click", () => {
  menuLinks.classList.toggle("show");
});
const scrollBtn = document.getElementById("up");
(window.onscroll = () => {
  window.scrollY > 500
    ? scrollBtn.classList.add("scroll")
    : scrollBtn.classList.remove("scroll");
}),
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
const navbarItems = document.querySelectorAll(".nav li");
navbarItems.forEach((e) => {
  e.addEventListener("click", () => {
    navbarItems.forEach((e) => e.classList.remove("active")),
      e.classList.add("active");
  });
});
const revealElements = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
  revealElements.forEach((e, t) => {
    let l = window.innerHeight,
      s = e.getBoundingClientRect().top;
    s < l - 100
      ? setTimeout(() => {
          e.classList.add("active");
        }, 200 * t)
      : e.classList.remove("active");
  });
}),
  window.addEventListener("load", () => {
    window.dispatchEvent(new Event("scroll"));
  });
