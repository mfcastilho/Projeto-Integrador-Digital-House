const navBar = document.querySelector("[data-bar-nav]");

let form = document.querySelector("#form-id");
let logo = document.querySelector("[data-logo-box]");
let header = document.getElementsByTagName("header")[0];
let containerHeader = document.querySelector("[data-container]");

scrollDetected();



/*Event that fires when the view
  of the document(window) is resized, where
  if it is larger than 991px the navigation bar
  appears, if it is less than or equal to 991px, the
  navigation bar disappears*/
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



/* Function that detects the position of the scroll
  and from there, make it appear or disappear
  the navigation bar */
function scrollDetected(){

  
  window.addEventListener("scroll", (event) => {
    console.log(event);

    //getting the width of the viewport
    let viewportWidth = window.innerWidth;
    console.log(viewportWidth);

    //getting the scroll position
    let scroll  = this.scrollY;
    console.log("Posição:"+scroll);

    //if the scroll position is not in the top, 
    //the navagation bar disappears
    if(scroll>0){
      navBar.style.display = "none";
      console.log("maior que 0");
    }
  
    //If the scroll position is at the top, 
    //the navigation bar appears
    if(scroll==0){      
      console.log("igual a 0");
      navBar.style.transition = "rotate(-0.5rem)"; 
      navBar.style.display = "inline"; 
      
    }
    
    /*Mobile header behavor*/
    if(viewportWidth <= 991){
      console.log(viewportWidth)
      /*if it is from the type Mobile
      , the navegation bar NEVER appears*/
      if(scroll==0){
        navBar.style.display = "none"; 
      } 
      if(scroll>0){

      }
    }       
  });
}  




