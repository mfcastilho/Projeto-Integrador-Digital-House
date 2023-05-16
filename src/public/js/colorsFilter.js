const route = window.location.pathname;
const routeParts = route.split("/");
const lastRouteParte = routeParts[routeParts.length -1];


console.log(lastRouteParte);

const colorSquares = document.querySelectorAll(".color-square");

colorSquares.forEach(square=>{

    
    square.addEventListener("click", (e)=>{
        const selectedColor = e.target.title;
        window.location.href = `/filtrando?color=${selectedColor}`;
    });
});