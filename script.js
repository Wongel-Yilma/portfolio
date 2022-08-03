"use strict";

let slides = document.getElementsByClassName("overview__slide");

const dots = document.getElementsByClassName("dot");
const form = document.querySelector(".cta-form");
const allLinks = document.querySelectorAll("a:link");
const imgEl = document.querySelector(".profile__img");

//    FORM SUBMISSION CODE ONTO GOOGLE SHEET VIA API
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: "post",
    body: new FormData(document.getElementById("sheetdb-form")),
  })
    .then((response) => response.json())
    .then((html) => {
      alert("You have successfully submitted the form");
      console.log("Its on");
    });
});

//   APPLYING SMOOTH SCROLLING
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    // console.log(href);
    //SCROLL BACK TO THE TOP
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    //SCROLL TO OTHER LINKS
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }
    //OPEN OTHER LINKS
    if (href.endsWith("html")) {
      console.log(href);
      window.open(href, "_blank").focus();
    }
  });
});

//  STICKY NAVIGATION
const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    } else if (ent.isIntersecting) {
      console.log(ent);
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-100px",
  }
);
obs.observe(imgEl);
