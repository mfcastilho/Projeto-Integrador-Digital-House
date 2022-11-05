const navBar = document.querySelector("[data-bar-nav]");


/*Evento que é acionado quando a visualição
  do documento(window) é redimensionada, onde
  se for maior que 991px a barra de navegação
  aparece, se for menor ou igual à 991px, a 
  barra de navegação desaparece*/
window.addEventListener("resize", event =>{
  let viewportWidth = window.innerWidth;

  if(viewportWidth > 991){
    navBar.style.display = "inline";
    scrollDetectedDesktop();
  }

  if(viewportWidth <= 991){
    navBar.style.display = "none";
    scrollDetectedMobile();
  }
  
});


/* Função que detecta a posição do scroll
  e a partir disso, faz aparecer ou desaparecer
  a barra de navegação - Desktop */
function scrollDetectedDesktop(){

  window.addEventListener("scroll", (event) => {
    let scroll  = this.scrollY;
  
    if(scroll>0){
        navBar.style.display = "none";
    }
    
    if(scroll==0){
        navBar.style.display = "inline";
     
    } 
  });  
}

/*Função que detecta a posição do scroll
  e a partir disso, se o eixo y estiver
  igual a zero, ele nãodeixa desaparecer 
  a barra de navegação - Mobile */
function scrollDetectedMobile(){

  window.addEventListener("scroll", (event) => {
    let scroll  = this.scrollY;
  
    if(scroll==0){
        navBar.style.display = "none";  
    } 
  });  
}






