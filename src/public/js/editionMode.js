console.log("Entrei");


const form = document.querySelector("#personal-data-form");
const inputs = document.querySelectorAll(".hugging-form input");


form.addEventListener("submit", (event)=>{
  event.preventDefault();


  inputs.forEach(input=>{
    event.preventDefault();
    input.disabled = false;
  });
});