console.log("Filtros de cores...");

const colorSquares = document.querySelectorAll(".color-square");

colorSquares.forEach(square=>{
    square.addEventListener("click", (e)=>{
        const selectedColor = e.target.title;
        window.location.href = `/filtrando?color=${selectedColor}`;
    });
});