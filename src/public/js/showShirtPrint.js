

const productCards = document.querySelectorAll(".product-card");
const tshirtsImage = document.querySelectorAll(".tshirt-image"); 
const tshirtsPrint = document.querySelectorAll(".tshirt-print");


for(let i = 0; i < productCards.length; i++){
  productCards[i].addEventListener("mouseover", (event)=>{
    console.log("Passou por cima do card");

    tshirtsImage[i].style.display = "none";
    tshirtsPrint[i].style.display = "block";
    
  });
  
  productCards[i].addEventListener("mouseleave", (event)=>{
    console.log("Saiu de cima do card"); 

    tshirtsPrint[i].style.display = "none";
    tshirtsImage[i].style.display = "block";
  });
}