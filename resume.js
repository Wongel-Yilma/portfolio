"use strict";

const content = document.getElementsByClassName("content");

const navItem = document.getElementsByClassName("side-nav__item");
const navLink = document.getElementsByClassName("side-nav__link");

let contentIndex = 1;
console.log(content);

viewContent(1);

function viewContent(i) {
  for (let j = 0; j < navItem.length; j++) {
    if (j === i - 1) {
      content[j].style.display = "grid";
    } else {
      content[j].style.display = "none";
    }
  }
  contentIndex = i;
  setActiveContent(contentIndex);
}

function setActiveContent(i) {
  for (let j = 0; j < navItem.length; j++) {
    if (j === i - 1) {
      navItem[j].classList.add("active-content");
      navLink[j].classList.add("active-content");
    } else {
      navItem[j].classList.remove("active-content");
      navLink[j].classList.remove("active-content");
    }
  }
}
