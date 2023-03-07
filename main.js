function openCookie() {
  document.querySelector(".screen1").classList.add("hide");
  document.querySelector(".screen2").classList.remove("hide");
}

function newCookie() {
  document.querySelector(".screen1").classList.remove("hide");
  document.querySelector(".screen2").classList.add("hide");
}