const buttons = document.getElementById("btn");
const firstImage = document.getElementById("firstImage");
const yesImage = document.getElementById("yesImage");
const noImage = document.getElementById("noImage");
const noButton = document.getElementById("noButton");
const like = document.getElementById("like");
const yay = document.getElementById("yay");
const bitch = document.getElementById("bitch");

noButton.addEventListener("click", () => {
  buttons.style.display = "none";
  firstImage.style.display = "none";
  noImage.style.display = "block";
  like.style.display = "none";
  bitch.style.display = "block";
});


yesButton.addEventListener("click", () => {
  buttons.style.display = "none";
  firstImage.style.display = "none";
  yesImage.style.display = "block";

   like.style.display = "none";
  yay.style.display = "block";
});