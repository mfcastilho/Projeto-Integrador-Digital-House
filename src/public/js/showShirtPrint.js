
const cardImage = document.querySelector(".product-card img");

// const dataBase = require("../../data-base/dataBase.json");

cardImage.addEventListener("mouseover", (event)=>{
  cardImage.style.visibility = "hidden";
});

cardImage.addEventListener("mouseout", (event)=>{
  cardImage.style.visibility = "visible";
});