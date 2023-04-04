const swipe = document.querySelector(".swipeMenu");

const left = document.querySelector("#left");

const right = document.querySelector("#right");

let pages = ["index.html", "about.html", "projet.html"];

setTimeout(() => {
  swipe.classList.remove("swipeActive");
}, 1000);

left.addEventListener("click", () => {
  swipe.classList.add("swipeActive");
  setTimeout(() => {
    window.location = "about.html";
  }, 300);
});

right.addEventListener("click", () => {
  swipe.classList.add("swipeActive");
  setTimeout(() => {
    window.location = "projet.html";
  }, 300);
});
