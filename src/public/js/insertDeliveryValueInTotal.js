const freight = document.querySelector(".freight");
const total = document.querySelector(".total");
const deliveryPrice = document.querySelector(".delivery-price");
const inputAddress = document.querySelector("#address_radio_button");
const finalCardValue = document.querySelector(".value");
const finalTicketValue = document.querySelector("#ticket-value")
const inputCardValidation = document.querySelector("#card_expiring_date");


const form = document.querySelector("#checkout-form");



inputAddress.addEventListener("click", ()=>{

    const inputTotalPrice = document.querySelector("#input-Total-price"); 

    freight.innerHTML = deliveryPrice.innerText;
    total.innerHTML = parseFloat(total.innerHTML) + parseFloat(deliveryPrice.innerText);
    finalCardValue.innerHTML = total.innerHTML;
    finalTicketValue.innerHTML = total.innerHTML;

    const totalPrice = total.innerHTML;
    console.log(totalPrice)

    inputTotalPrice.setAttribute("value", totalPrice)

});

inputCardValidation.addEventListener("input", (e)=>{
    const inputValue = e.target.value.replace(/\D/g, "");

    if (inputValue.length >= 2) {
        // divida a entrada em mês e ano usando o método slice
        const month = inputValue.slice(0, 2);
        const year = inputValue.slice(2, 4);
    
        // crie uma data usando o mês e ano informados
        const date = new Date(`20${year}`, parseInt(month) - 1);
    
        // crie uma nova string de data com o formato "mm/aa"
        const formattedDate = `${month}/${year}`;
    
        // defina o valor do campo de entrada de data para a nova string formatada
        e.target.value = formattedDate;
      }else if(inputValue.length === 0) {
        // se o valor de entrada for vazio, defina o valor do campo de entrada de data para uma string vazia
        e.target.value = "";
      }   
});


form.addEventListener("submit", ()=>{
  const totalInput = document.querySelector("#input-total");

  totalInput.setAttribute("value", total.innerHTML);
})