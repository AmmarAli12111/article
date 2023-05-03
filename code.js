let link = document.querySelector(".articl-link");
let links = document.querySelector(".another-links");
let parentLiOne = document.querySelector(".links .home");
let parentLiTwo = document.querySelector(".links .arrow");
let parentLiThree = document.querySelector(".links .services");
let parentLiFour = document.querySelector(".links .about");
let listOne = document.querySelector(".list-one");
let liOne = document.querySelector(".list-one li:nth-child(1)");
let liTwo = document.querySelector(".list-one li:nth-child(2)");
let liThree = document.querySelector(".list-one li:nth-child(3)");
let liFour = document.querySelector(".list-one li:nth-child(4)");
let nav = document.querySelector(".navigation");
let iconBar = document.querySelector(".icon-bar");
let header = document.querySelector(".header");
let containerHeader = document.querySelector(".header .container");
let acountSide = document.querySelector(".acount-side");
let search = document.querySelector(".search");
let input = document.querySelector(".search input");
let iconSearch = document.querySelector(".search ion-icon");
let ul = document.querySelector(".links");
let body = document.querySelector("body");

document.addEventListener("click", eventIcon);

function eventIcon(e) {
  if (e.target.classList.contains("icon-bar")) {
    nav.classList.toggle("open");
    iconBar.classList.toggle("open");
  }
  removeFormBody(e);
  removeFromEl(e);
}

function removeFormBody(el) {
  if (
    el.target !== iconBar &&
    el.target !== header &&
    el.target !== nav &&
    el.target !== link &&
    el.target !== containerHeader &&
    el.target !== search &&
    el.target !== input &&
    el.target !== iconSearch &&
    el.target !== links &&
    el.target !== listOne &&
    el.target !== liOne &&
    el.target !== liTwo &&
    el.target !== liThree &&
    el.target !== liFour &&
    el.target !== parentLiOne &&
    el.target !== parentLiTwo &&
    el.target !== parentLiThree &&
    el.target !== parentLiFour &&
    el.target !== ul &&
    el.target !== acountSide
  ) {
    if (nav.classList.contains("open") && iconBar.classList.contains("open")) {
      iconBar.classList.remove("open");
      nav.classList.remove("open");
    }
  }
  if (
    el.target !== iconBar &&
    el.target !== header &&
    el.target !== nav &&
    el.target !== link &&
    el.target !== containerHeader &&
    el.target !== search &&
    el.target !== input &&
    el.target !== iconSearch &&
    el.target !== links &&
    el.target !== listOne &&
    el.target !== liOne &&
    el.target !== liTwo &&
    el.target !== liThree &&
    el.target !== liFour &&
    el.target !== parentLiOne &&
    el.target !== parentLiTwo &&
    el.target !== parentLiThree &&
    el.target !== parentLiFour &&
    el.target !== ul &&
    el.target !== acountSide
  ) {
    if (
      links.classList.contains("show") &&
      link.classList.contains("show-links")
    ) {
      links.classList.remove("show");
      link.classList.remove("show-links");
      nav.classList.toggle("open-more");
    }
  }
}

function removeFromEl(e) {
  if (e.target.classList.contains("articl-link")) {
    link.classList.toggle("show-links");
    links.classList.toggle("show");
    nav.classList.toggle("open-more");
  }
}

let year = document.querySelector(".year");
let date = new Date();
let fullYear = date.getFullYear();
year.innerHTML = fullYear;

let lis = document.querySelectorAll(".links li");
let bodyId = document.querySelector("body").id;
let Link = document.querySelector(".links .home");

lis.forEach((li) => {
  if (li.classList.contains(bodyId)) {
    li.classList.add("active");
  }
  if (window.location.pathname === "/article/") {
    Link.classList.add("active");
  }
});

let articleLinks = document.querySelectorAll(".links .article li a");
let bodyclass = body.classList;

articleLinks.forEach((link) => {
  if (link.classList.contains(bodyclass)) {
    link.classList.add("active");
  }
});
