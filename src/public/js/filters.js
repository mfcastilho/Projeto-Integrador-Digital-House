const route = window.location.pathname;
const routeParts = route.split("/");
const lastRouteParte = routeParts[routeParts.length -1];

const orderFilter = document.querySelector("#choice-order-filter");

const inputMasculineFilter = document.querySelector("#masculine");
const inputFeminineFilter = document.querySelector("#feminine");

const colorSquares = document.querySelectorAll(".color-square");


function redirect(){
    const inputMasculineFilter = document.querySelector("#masculine");
    const inputFeminineFilter = document.querySelector("#feminine");

    if((inputMasculineFilter.checked == true && inputFeminineFilter.checked == true) || (inputMasculineFilter.checked == false && inputFeminineFilter.checked == false)){
        window.location.href = `/listagem-produtos`;
    
    }else if(inputMasculineFilter.checked && inputFeminineFilter.checked == false){

        window.location.href = `/listagem-produtos/masculinos`;

    }else if(inputFeminineFilter.checked && inputMasculineFilter.checked == false){

        window.location.href = `/listagem-produtos/femininos`;

    }
}



function manipulatinInputsCheckbox(){
    if(route == "/listagem-produtos"){

        inputMasculineFilter.checked = true;
        inputFeminineFilter.checked = true;
    
    }else if(route == "/search"){
    
        inputMasculineFilter.checked = true;
        inputFeminineFilter.checked = true;
    
    }else if(lastRouteParte == "masculinos"){
    
        inputMasculineFilter.checked = true;
    
    }else if(lastRouteParte == "femininos"){
    
        inputFeminineFilter.checked = true;
    
    }else if(lastRouteParte == "filme"){
    
        inputFeminineFilter.checked = true;
        inputMasculineFilter.checked = true;
    
    }else if(lastRouteParte == "anime"){
    
        inputMasculineFilter.checked = true;
        inputFeminineFilter.checked = true;
    
    }
}



colorSquares.forEach(square=>{

    
    square.addEventListener("click", (e)=>{

        if(lastRouteParte == "listagem-produtos"){

            // if(orderFilter.value == "alphabeticalOrder"){

            // }else if(orderFilter.value == "lowestPrice"){

            // }else if(orderFilter.value == "biggestPrice"){

            // }

            const selectedColor = e.target.title;
            window.location.href = `/listagem-produtos?color=${selectedColor}`;

        }else if(lastRouteParte == "masculinos"){

            const selectedColor = e.target.title;
            window.location.href = `/listagem-produtos/masculinos?color=${selectedColor}`;

        }else if(lastRouteParte == "femininos"){

            const selectedColor = e.target.title;
            inputFeminineFilter.checked = true;
            window.location.href = `/listagem-produtos/femininos?color=${selectedColor}`;

        }else if(lastRouteParte == "filme"){

            const selectedColor = e.target.title;
            window.location.href = `/listagem-produtos/categoria/filme?color=${selectedColor}`;

        }else if(lastRouteParte == "anime"){

            const selectedColor = e.target.title;
            window.location.href = `/listagem-produtos/categoria/anime?color=${selectedColor}`;

        }
        // const selectedColor = e.target.title;
        // window.location.href = `/filtrando?color=${selectedColor}`;
    });
});



manipulatinInputsCheckbox();


// function orderFilter(){
//     if(lastRouteParte == "listagem-produtos"){

//         if(orderFilter.value == "alphabeticalOrder"){
//             const query = "ordemAlfabetica"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "lowestPrice"){
    
//             const query = "menorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "biggestPrice"){
    
//             const query = "maiorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }
    
    
//     }else if(lastRouteParte == "masculinos"){
    
//         if(orderFilter.value == "alphabeticalOrder"){
//             const query = "ordemAlfabetica"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "lowestPrice"){
    
//             const query = "menorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "biggestPrice"){
    
//             const query = "maiorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }
    
//     }else if(lastRouteParte == "femininos"){
    
//         if(orderFilter.value == "alphabeticalOrder"){
//             const query = "ordemAlfabetica"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "lowestPrice"){
    
//             const query = "menorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "biggestPrice"){
    
//             const query = "maiorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }
    
//     }else if(lastRouteParte == "filme"){
    
//         if(orderFilter.value == "alphabeticalOrder"){
//             const query = "ordemAlfabetica"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "lowestPrice"){
    
//             const query = "menorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "biggestPrice"){
    
//             const query = "maiorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }
    
//     }else if(lastRouteParte == "anime"){
    
//         if(orderFilter.value == "alphabeticalOrder"){
//             const query = "ordemAlfabetica"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "lowestPrice"){
    
//             const query = "menorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }else if(orderFilter.value == "biggestPrice"){
    
//             const query = "maiorPreco"
//             window.location.href = `/listagem-produtos?order=${query}`;
    
//         }
    
//     }
    
// }




