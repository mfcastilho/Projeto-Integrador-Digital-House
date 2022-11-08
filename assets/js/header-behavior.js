const navBar = document.querySelector("[data-bar-nav]");

let form = document.querySelector("#form-id");
let logo = document.querySelector("[data-logo-box]");
let header = document.getElementsByTagName("header")[0];
let containerHeader = document.querySelector("[data-container]");

scrollDetected();



/*Evento que é acionado quando a visualição
  do documento(window) é redimensionada, onde
  se for maior que 991px a barra de navegação
  aparece, se for menor ou igual à 991px, a 

  /*barra de navegação desaparece*/
window.addEventListener("resize", event =>{
  let viewportWidth = window.innerWidth;

  if(viewportWidth > 991){
    navBar.style.display = "block";
    scrollDetected();
    console.log("Desktop");
  }

  if(viewportWidth <= 991){
    navBar.style.display = "none";
    scrollDetected();
    console.log("Mobile");
  }
});



/* Função que detecta a posição do scroll
  e a partir disso, faz aparecer ou desaparecer
  a barra de navegação - Desktop */
function scrollDetected(){

  
  window.addEventListener("scroll", (event) => {
    console.log(event);
    //Pegando a largura da viewport
    let viewportWidth = window.innerWidth;
    console.log(viewportWidth);

    //Pegando a posição do scroll
    let scroll  = this.scrollY;
    console.log("Posição:"+scroll);

    //Se a posição do scroll NÃO estiver no topo
    //Desapare a barra de navegação
    if(scroll>0){
      navBar.style.display = "none";
      console.log("maior que 0");
    }
  
    //Se a posição do scroll estiver no topo(posição 0)
    //Aparece a barra de navegação
    if(scroll==0){      
      console.log("igual a 0");
      navBar.style.transform = "rotate(-0.5rem)"; 
      navBar.style.display = "inline"; 
    }
    
    /*Comportamento Mobile header*/
    if(viewportWidth <= 991){
      console.log(viewportWidth)
      /*Se for mobile a barra de
        navegação NUNCA aparece*/
      if(scroll==0){
        navBar.style.display = "none"; 
      } 
      if(scroll>0){

      }
    }       
  });
}  




