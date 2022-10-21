let $ = document;
const navbar = $.querySelector(".my-navbar");
const btnsShow = $.querySelectorAll(".btn-show");
const showMore = $.querySelectorAll(".show-more");

const listEducation = $.getElementById("list-education");
const listsNavbar = $.querySelectorAll(".my-list-navbar");
const bulbChange = $.getElementById("imag-bulb");
const bell = $.getElementById("bell");

function welcomeFunc() {
  alert("Welcome to my page");
}
let flagBulb = true;
setInterval(function () {
  if (!flagBulb) {
    bulbChange.src = "image/skill.png";
    flagBulb = true;
  } else {
    bulbChange.src = "image/skill-on.png";
    flagBulb = false;
  }
}, 500);

function scrollFunc() {
  // console.log($.body.scrollTop);
  if ($.body.scrollTop > 480) {
    navbar.style.top = "0";
    navbar.style.position = "fixed";
  } else {
    navbar.style.top = "-50%";
    // navbar.style.position = "absolute";
  }
}

let flag = true;
function showMoreFucn(event) {
  let sibling = event.target.previousElementSibling;
  // console.log(sibling);
  if (flag) {
    sibling.classList.add("active");
    sibling.classList.remove("deactive");
    event.target.innerHTML = "Show less";
    flag = false;
  } else {
    sibling.classList.remove("active");
    sibling.classList.add("deactive");
    event.target.innerHTML = "Show more";
    flag = true;
  }
  event.target.blur();
}

function scrollNavbar(event) {
  let text = event.target.innerHTML;

  switch (text) {
    case "Khojasteh Seyedbaghery":
      window.scrollTo(0, 250);
      break;
    case "Education":
      window.scrollTo(0, 500);
      break;
    case "Skills":
      window.scrollTo(0, 870);
      break;
    case "Projects":
      window.scrollTo(0, 1200);
      break;

    default:
      break;
  }
}

function bellChange(event) {
  if(flag){
    event.target.classList.remove("fa-bell");
    event.target.classList.add("fa-bell-slash");
    flag = false;
  }else{
    event.target.classList.remove("fa-bell-slash");
    event.target.classList.add("fa-bell");
    flag = true;

  }
}

window.addEventListener("load", welcomeFunc);
$.addEventListener("scroll", scrollFunc);
btnsShow.forEach((btnShow) => {
  btnShow.addEventListener("click", showMoreFucn);
});

listsNavbar.forEach(function (list) {
  list.addEventListener("click", scrollNavbar);
});

bell.addEventListener("click", bellChange);
