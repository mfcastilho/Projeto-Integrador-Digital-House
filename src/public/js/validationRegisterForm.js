window.addEventListener("load",()=>{

  const inputEmail = document.querySelector("#email-id");
  const inputConfirmEmail = document.querySelector("#confirm-email-id");
  const inputPassword = document.querySelector("#password-id");
  const inputConfirmPassword = document.querySelector("#confirm-password-id");

  const inputFisicalPerson = document.querySelector("#fisical-person-id");
  const inputLegalPerson = document.querySelector("#legal-persson-id");
 
  const inputName = document.querySelector("#name-id");
  const inputCpf = document.querySelector("#cpf-id");
  const inputCel = document.querySelector("#cel-id");
  const inputTel = document.querySelector("#tel-id");
  const inputGenre = document.querySelector("#genre-id");
  const inputBirthday = document.querySelector("#birthday-id");
  
  const button = document.querySelector("[data-create-account-button]");

  const erroMsg = document.querySelector(".input-erro-msg");

  const inputs = document.querySelectorAll(".input-box input");

  const spansInputBox = document.querySelectorAll(".input-box span");
  



  function checkingIfTheFieldIsEmpty(event){

    for(let i = 0; i < inputs.length; i++){
      spansInputBox[i].innerHTML = ""; 
      if(inputs[i].value == ""){
        event.preventDefault();
        spansInputBox[i].innerHTML = "*Campo não pode ficar vazio"; 
      }
    }
  }


  button.addEventListener("click", checkingIfTheFieldIsEmpty);







});

