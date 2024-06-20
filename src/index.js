import "./style.css";
import architect1 from "./architect.jpg";
import architect2 from "./architect2.jpg";
import architect3 from "./building.jpg";

function addImage(image) {
  const imageDiv = document.querySelector(".image-div");
  const theImage = new Image();
  theImage.src = image;
  imageDiv.appendChild(theImage);
}

function imagePortrait() {
  addImage(architect1);
  addImage(architect2);
  addImage(architect3);
}

function eventHandling() {
  const allCircle = document.querySelectorAll(".circle");
  const firstCircle = document.getElementById("one");
  const secondCircle = document.getElementById("two");
  const thirdCircle = document.getElementById("three");
  const imageDiv = document.querySelector(".image-div");
  const menuBtn = document.querySelector(".menu-button");
  const dropDown = document.querySelector(".drop-down");

  menuBtn.addEventListener("click", () => {
    dropDown.classList.toggle("show");
  });

  firstCircle.addEventListener("click", () => {
    imageDiv.style.right = "";
    allCircle.forEach((item) => item.classList.remove("toggle"));
    firstCircle.classList.toggle("toggle");
  });

  secondCircle.addEventListener("click", () => {
    imageDiv.style.right = "300px";
    allCircle.forEach((item) => item.classList.remove("toggle"));
    secondCircle.classList.toggle("toggle");
  });

  thirdCircle.addEventListener("click", () => {
    imageDiv.style.right = "600px";
    allCircle.forEach((item) => item.classList.remove("toggle"));
    thirdCircle.classList.toggle("toggle");
  });
}

function checkToggle() {
  const allCircle = document.querySelectorAll(".circle");
  const firstCircle = document.getElementById("one");
  const secondCircle = document.getElementById("two");
  const thirdCircle = document.getElementById("three");
  const imageDiv = document.querySelector(".image-div");
  const rightValue = imageDiv.style.right;

  if (rightValue === "") {
    allCircle.forEach((item) => item.classList.remove("toggle"));
    firstCircle.classList.toggle("toggle");
  }
  if (rightValue === "300px") {
    allCircle.forEach((item) => item.classList.remove("toggle"));
    secondCircle.classList.toggle("toggle");
  }
  if (rightValue === "600px") {
    allCircle.forEach((item) => item.classList.remove("toggle"));
    thirdCircle.classList.toggle("toggle");
  }
}

function repeat() {
  const imageDiv = document.querySelector(".image-div");
  const rightValue = imageDiv.style.right;

  if (rightValue === "") {
    return (imageDiv.style.right = "300px");
  }
  if (rightValue === "300px") {
    return (imageDiv.style.right = "600px");
  }
  if (rightValue === "600px") {
    return (imageDiv.style.right = "");
  }
}

function render() {
  imagePortrait();
  eventHandling();
  checkToggle();
}

/* setInterval(() => {
  repeat();
  checkToggle();
}, "5000"); */
render();
