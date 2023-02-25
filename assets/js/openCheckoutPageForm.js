//formulário do cartão de crédito
const paymentFormulary = document.getElementById("payment_form_id");

//Valor a ser pago no boleto
const showTicketValuePayment = document.querySelector(".show-value-payment");


//elementos usados para eventos
const ticketPayment = document.getElementById("ticket_payment");
const creditCardPayment = document.getElementById("credit_card_payment");

//classes usadas para aparecer e sumir os inputs de escolhas de forma de pagamento
const divTicketPayment = document.querySelector(".ticket_payment-class");
const divcreditCardPayment = document.querySelector(".credit_card_payment");


//botão para mudar a escolha de forma de pagamento
const changePaymentFormBox = document.querySelector(".change-payment-form-box");


creditCardPayment.addEventListener("click", ()=>{
  paymentFormulary.style.display = "block";
  divTicketPayment.style.display = "none";

  changePaymentFormBox.style.display = "flex";
});



ticketPayment.addEventListener("click", ()=>{ 
  divcreditCardPayment.style.display = "none";
  changePaymentFormBox.style.display = "block";

  showTicketValuePayment.style.display = "flex";

});



changePaymentFormBox.addEventListener("click", ()=>{
 
  divcreditCardPayment.style.display = "flex";
  divTicketPayment.style.display = "flex";

  paymentFormulary.style.display = "none";
  showTicketValuePayment.style.display = "none";
  changePaymentFormBox.style.display = "none";
 
  document.getElementById("ticket_payment").checked = false;
  document.getElementById("credit_card_payment").checked = false;
})


// function verifyWhatPaymentFormIsChecked(){

//   console.log("entrou na função")

//   let paymentFormButtons = document.getElementsByName("payment_radio_button");
//   let paymentFormValueChecked = "";

//   for(let i = 0; i< paymentFormButtons.length; i++){
//     if(paymentFormButtons[i].checked){
//       paymentFormValueChecked = paymentFormValueChecked[i].value;
//       console.log(paymentFormValueChecked)
//     }
//   }

//   if(paymentFormValueChecked == "creditCard"){
//     document.getElementById("payment_form").style.display = "block"
//     console.log("Cartão")
    
//   }else if(paymentFormValueChecked == "ticket"){
//     console.log("boleto")
//     paymentForm.style.display = "none"; 
//   }
// }

// verifyWhatPaymentFormIsChecked();