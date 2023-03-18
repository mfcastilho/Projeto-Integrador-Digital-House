console.log("rodando....");


const plusSymbol = document.querySelector(".right-item");
const minusSymbol = document.querySelector(".left-item");
const quantity = document.querySelector(".center-item");

function quantityButtonsFuntion(){
    plusSymbol.addEventListener("click", ()=>{
        let quantityNumber = Number(quantity.innerHTML);
        quantityNumber++;
        console.log(quantityNumber)
        quantity.innerHTML = quantityNumber;
    });

    minusSymbol.addEventListener("click", ()=>{
        let quantityNumber = Number(quantity.innerHTML);
        quantityNumber--;
        console.log(quantityNumber)
        quantity.innerHTML = quantityNumber;
        if(quantity.innerHTML <= 0){
            quantity.innerHTML = 1;
        }
    });
}

quantityButtonsFuntion();