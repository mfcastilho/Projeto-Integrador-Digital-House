
const plusSymbol = document.querySelector(".right-item");
const minusSymbol = document.querySelector(".left-item");
const quantity = document.querySelector(".center-item");
const inputProductQuantity = document.querySelector("#input-quantity-id");


let productQuantity;

function quantityButtonsFuntion(){
    
    let quantityNumber = Number(quantity.innerHTML);
    console.log(quantityNumber)

    plusSymbol.addEventListener("click", ()=>{
        
        quantityNumber++;
        quantity.innerHTML = quantityNumber;
        inputProductQuantity.setAttribute("value", quantityNumber.toString())
        // console.log(inputProductQuantity.value)
    });

    minusSymbol.addEventListener("click", ()=>{
        let quantityNumber = Number(quantity.innerHTML);
        quantityNumber--;
        quantity.innerHTML = quantityNumber;

        if(quantityNumber <= 0){
            quantityNumber = 1;
            quantity.innerHTML = quantityNumber; 
        }

        inputProductQuantity.setAttribute("value", quantityNumber.toString())
        // console.log(inputProductQuantity.value)
    });

    inputProductQuantity.setAttribute("value", quantityNumber.toString())
}

quantityButtonsFuntion();