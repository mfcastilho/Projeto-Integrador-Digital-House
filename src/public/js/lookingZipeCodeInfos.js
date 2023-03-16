
//=======INPUTS=======
const inputZipCode = document.querySelector("#zip-code-id");
const inputpublicPlace = document.querySelector("#public-place-id");
const inputNumber = document.querySelector("#number-id");
const inputComplement = document.querySelector("#complement-id");
const inputDistrict = document.querySelector("#district-id");
const inputReference = document.querySelector("#reference-id");
const inputCity = document.querySelector("#city-id");
const stateOptions = document.querySelectorAll("#state-id option");



//=======FORMULÁRIO=======
const formulario = document.querySelector("#register-form");
//

//=======VARIÁVEIS E CONFIGURAÇÕES PARA USARMOS O MÉTODO FETCH(REQUISIÇÕES A APIs)=======
const APP_BASE_URL = "http://localhost:5050";
const BRASIL_API_BASE_URL = "https://brasilapi.com.br/api/cep/v2";

const CONFIG = {
  method: "GET",
  headers: {
    "Content-Type": "application/json"
  }
}





//=======CHAMANDO AS FUNÇÕES=======

formulario.addEventListener("submit", handleSubmit);
inputZipCode.addEventListener("keypress",verifyCepLength);
inputZipCode.addEventListener("blur", fetchCepData);




//=======FUNÇÕES=======



//Função que muda a cor do outiline dos inputs do formulário de endereço
function handleSubmit(event){ 
  
  let formOk = false;

  // function handleInputsStatus(input){

  //   if(input.value == ""){
  //     input.style.outline = "2px solid red";
  //     return formOk = false;
  //   }else{
  //     input.style.outline = "2px solid lightgreen";
  //     return formOk = true;
  //   }

  // }

  handleInputsStatus(inputZipCode);
  handleInputsStatus(inputNumber);
  // handleInputsStatus(inputState);
  handleInputsStatus(inputCity);
  handleInputsStatus(inputpublicPlace);
  handleInputsStatus(inputDistrict);
  
  if(formOk){
    // clearInputs();
    console.log("Enviado com sucesso");
    // window.location.href = `${APP_BASE_URL}/login`;
  }else{
    event.preventDefault();
    alert("Não foi possível enviar!");
  }
}

//Função que limita a entrada do input do cep em no máximo 8 caracteres 
function verifyCepLength(event){
  if(event.target.value.length > 7){
    event.preventDefault();
  }
}

//Função que limpa os inputs
function clearInputs(){
  // const inputs = document.querySelector(".inputs-column-behavior input");
  // inputs.forEach(input=>input.value = "");
}

//Função que faz o Ajax de uma api(cep) para o formulário de endereço
async function fetchCepData(){

  const zipCode = inputZipCode.value;
  // console.log(zipCode);
  
  const response = await fetch(`${BRASIL_API_BASE_URL}/${zipCode}`, CONFIG);
  const data = await response.json();


  const {state, city, neighborhood, street} = data;

  inputCity.value = city;
  inputDistrict.value = neighborhood;
  inputpublicPlace.value = street;

  stateOptions.forEach(stateFound=>{
    if(stateFound.innerHTML == state){
      stateFound.setAttribute("selected", true);
    }
  });

  if(street == undefined || neighborhood == undefined){
    inputDistrict.value = "";
    inputpublicPlace.value = "";
  }
}






