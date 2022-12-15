

const productCards = document.querySelectorAll(".product-card");
const tshirtsImage = document.querySelectorAll(".tshirt-image"); 
const tshirtsPrint = document.querySelectorAll(".tshirt-print");

//
// const dataBase = require("../../data-base/dataBase.json");


// productCards.forEach((card)=>{
//   card.addEventListener("mouseover", (event)=>{
//     console.log("Passou");
//   });
  
//   card.addEventListener("mouseleave", (event)=>{
//     console.log("saiu"); 
//   });
// });

for(let i = 0; i < productCards.length; i++){
  productCards[i].addEventListener("mouseover", (event)=>{
    console.log("Passou");
    tshirtsImage[i].style.display = "none";
    tshirtsPrint[i].style.display = "block";
  });
  
  productCards[i].addEventListener("mouseleave", (event)=>{
    console.log("saiu"); 
    tshirtsPrint[i].style.display = "none";
    tshirtsImage[i].style.display = "block";
  });
}