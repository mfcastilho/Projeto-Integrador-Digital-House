const menuBurger = document.querySelector("[data-menu-burger]");
const submenu = document.querySelector(".submenu");
const seta = document.querySelector(".seta");

menuBurger.addEventListener("click", function(event) {
    event.stopPropagation();
    if (submenu.style.display === "none") {
      submenu.style.display = "block";
      seta.style.display = "block";
    } else {
      submenu.style.display = "none";
      seta.style.display = "none";
    }
  });
  
  document.addEventListener("click", function() {
    submenu.style.display = "none";
    seta.style.display = "none";
  });
  
//   submenu.addEventListener("click", function(event) {
//     event.stopPropagation();
//   });