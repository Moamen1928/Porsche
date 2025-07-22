const menuicon = document.getElementById("menu-icon");
const menuLinks = document.getElementById("menu");

menuicon.addEventListener("click", () => {
    menuLinks.classList.toggle("show");
});
// scroll to top button
const scrollBtn = document.getElementById("up");
window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollBtn.classList.add("scroll");
    } else {
        scrollBtn.classList.remove("scroll");
    }
};
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// navbar scroll animation
const navbarItems = document.querySelectorAll(".nav li");

navbarItems.forEach((item) => {
    item.addEventListener("click", () => {
    navbarItems.forEach((el) => el.classList.remove("active"));
    
    item.classList.add("active");
    });
});


// Reveal on Scroll
const revealElements = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
revealElements.forEach((el, index) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
    setTimeout(() => {
        el.classList.add("active");
      }, index * 200);
    } else {
    el.classList.remove("active");
    }
    });
});

window.addEventListener("load", () => {
    window.dispatchEvent(new Event("scroll"));
});


