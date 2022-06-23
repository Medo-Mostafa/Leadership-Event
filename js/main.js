let links = document.querySelectorAll(".menu li a"); // Select All links in Header
let sections = document.querySelectorAll("section"); // Select All sections in HTML File
// Determine Section On Scroll And Change
// link Class active According to The textContent of The Section
window.onscroll = function () {
  let scrollPosition = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - 100 &&
      scrollPosition <= section.offsetHeight + section.offsetTop
    ) {
      links.forEach((link) => {
        if (section.className === "landing") {
          removeClass(links);
          addClass(links[0]);
        }else if (
          section.className === link.textContent.toLocaleLowerCase() &&
          section.className !== "row"
        ) {
          removeClass(links);
          addClass(link);
        }
      });
    }
  });
};
function removeClass(links) {
  links.forEach((ele) => {
    ele.classList.remove("active");
  });
}
function addClass(link) {
  link.classList.add("active");
}
let icon = document.querySelector(".icon");
let menu = document.querySelector(".menu");
icon.onclick = () => {
  icon.classList.toggle("active");
  menu.classList.toggle("open");
};
// ------------------------------------Global Animate Content Function------------------------------------
function animateContent(parent, ...childs) {
  window.addEventListener("scroll", function () {
    if (window.scrollY >= parent.offsetTop - 200) {
      childs.forEach((ele) => {
        let arr = Array.from(ele);
        if (arr.length === 0) {
          ele.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
        } else {
          arr.forEach((element) => {
            element.style.cssText = `opacity:1;transform:translate(0,0);-webkit-transform:translate(0,0));-moz-transform:translate(0,0);-ms-transform:translate(0,0);-o-transform:translate(0,0);`;
          });
        }
      });
    }
  });
}
// ----------------------About Section------------------------------
let aboutSection = document.querySelector(".about");
let aboutHeading = document.querySelector(".about .heading");
let aboutContent = document.querySelector(".about .content");
let aboutText = document.querySelector(".about .text");
animateContent(aboutSection, aboutHeading, aboutContent, aboutText);
// ----------------------Speakers Section------------------------------
let speakersSection = document.querySelector(".speakers");
let speakersText = document.querySelector(".speakers .text");
let speakersFounder = document.querySelector(".speakers .main .normal");
let speakersPersons = document.querySelectorAll(".speakers .persons .normal");
animateContent(speakersSection, speakersText, speakersFounder, speakersPersons);
// ----------------------Schedules Section------------------------------
let schedules = document.querySelector(".schedules");
let schedulesImages = document.querySelectorAll(".schedules .Image");
let schedulesText = document.querySelectorAll(".schedules .text");
let schedulesLi = document.querySelectorAll(".schedules li");
let schedulesContents = document.querySelectorAll(".schedules .content");
let contentArray = Array.from(schedulesContents);
let display = `display:flex;`;
let liArray = Array.from(schedulesLi);
liArray.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    liArray.forEach((li) => {
      li.classList.remove("colored");
    });
    e.target.classList.add("colored");
  });
});

liArray.forEach((li) => {
  li.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
      e.target.parentElement.classList.add("colored");
      filterFunction(e.target.parentElement);
    } else {
      filterFunction(e.target);
    }
  });
});
let filterFunction = function (li) {
  contentArray.forEach((content) => {
    if (content.dataset.category === li.dataset.filter) {
      content.style.cssText = display;
    } else {
      content.style.cssText = `display:none;`;
    }
  });
};
// ----------------------Row Section------------------------------
animateContent(schedules, schedulesImages, schedulesText);
let rowSection = document.querySelector(".row");
let rowText = document.querySelector(".row .text");
let rowLink = document.querySelector(".row a");
// ----------------------Pricing Section------------------------------
animateContent(rowSection, rowText, rowLink);
let pricing = document.querySelector(".pricing");
let pricingHeading = document.querySelector(".pricing .heading");
let pricingBox = document.querySelectorAll(".pricing .box");
animateContent(pricing, pricingHeading, pricingBox);
// ----------------------Venue Section------------------------------
let venueSction = document.querySelector(".venue");
let venueHeading = document.querySelector(".venue .heading");
let venueSquare = document.querySelector(".venue .time-square");
animateContent(venueSction, venueHeading, venueSquare);