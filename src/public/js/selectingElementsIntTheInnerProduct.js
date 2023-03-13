console.log("rodando...");
let urlAtual = window.location.href;
console.log("URL:"+urlAtual);


const maleButton = document.querySelector(".male-button");
const femaleButton = document.querySelector(".female-button");
const buttonsColor = document.querySelectorAll(".color");
const divsColorButton = document.querySelectorAll(".color-hover");
const sizeButton = document.querySelectorAll(".size");
const buyButton = document.querySelector(".buy-button");
const tagProductPrice = document.querySelector(".product-price");


const form = document.querySelector("#selected-product-infos-form");

let selectedModel;
let colorSelected;
let sizeSelected;
let selectProductPrice;

function detectingWhoGenderButtonIsSelect(){
    if(maleButton.classList.contains("active")){
        console.log("Botão masculino selecionado");
        selectedModel = "masculina";
    }else if(femaleButton.classList.contains("active")){
        console.log("botão feminino selecionado");
        selectedModel = "feminina";
    }
}

function detectingWhColorButtonIsSelect(){
    buttonsColor.forEach((buttonColor)=>{
        buttonColor.addEventListener("click", (e)=>{
    
    
            divsColorButton.forEach(div=>{
                div.classList.remove("color-active");
            })
    
            const clickedButton = e.target;
            const selected = buttonColor.parentNode
    
            if(clickedButton.classList.contains("black")){
    
                console.log("Cor preto");
                selected.classList.add("color-active");
                colorSelected = "preto";
                return "preto";
    
            }else if(clickedButton.classList.contains("white")){
    
                console.log("Cor branco");
                selected.classList.add("color-active");
                colorSelected = "branco";
                return "branco";
    
            }else if(clickedButton.classList.contains("red")){
    
                console.log("Cor vermelho");
                selected.classList.add("color-active");
                colorSelected = "vermelho";
                return "vermelho";
    
            }else if(clickedButton.classList.contains("blue")){
    
                console.log("Cor azul");
                selected.classList.add("color-active");
                colorSelected = "azul";
                return "azul";
    
            }else if(clickedButton.classList.contains("yellow")){
    
                console.log("Cor amarelo");
                selected.classList.add("color-active");
                colorSelected = "amarelo";
                return "amarelo";
    
            }else if(clickedButton.classList.contains("green")){
    
                console.log("Cor verde");
                selected.classList.add("color-active");
                colorSelected = "verde";
                return "verde";
    
            }else if(clickedButton.classList.contains("pink")){
    
                console.log("Cor rosa");
                selected.classList.add("color-active");
                colorSelected = "rosa";
                return "rosa";
    
            }else if(clickedButton.classList.contains("orange")){
    
                console.log("Cor laranja");
                selected.classList.add("color-active");
                colorSelected = "laranja";
                return "laranja";
    
            }else if(clickedButton.classList.contains("gray")){
                
                console.log("Cor cinza");
                selected.classList.add("color-active");
                colorSelected = "cinza";
                return "cinza";
            }
        });
    })
}

function detectingWhoSizeButtonIsSelect(){
    sizeButton.forEach(button=>{
        button.addEventListener("click", (e)=>{
    
            sizeButton.forEach(button=>{
                button.classList.remove("size-selected");
            })
    
            clickedButton = e.target;
            clickedButton.classList.add("size-selected");
    
            if(clickedButton.classList.contains("p")){
                sizeSelected = "P";
            }else if(clickedButton.classList.contains("m")){
                sizeSelected = "M";
            }else if(clickedButton.classList.contains("g")){
                sizeSelected = "G";
            }
        });
    });
}

function getProductPrice(){
    selectProductPrice = tagProductPrice.innerText;
    console.log("Preço do produto: "+selectProductPrice);
}

function sendDataToBackend(){
    form.addEventListener("submit", (e)=>{
      
        if(selectedModel && colorSelected && sizeSelected){
            const inputModel = document.querySelector("#model-input");
            const inputColor = document.querySelector("#input-color");
            const inputSize = document.querySelector("#input-size");
            const inputPrice = document.querySelector("#input-price");
            inputModel.setAttribute("value", selectedModel);
            inputColor.setAttribute("value", colorSelected);
            inputSize.setAttribute("value", sizeSelected);
            inputPrice.setAttribute("Value", selectProductPrice);

        }else{
            e.preventDefault();
            console.log(selectedModel)
            alert("Selecione a cor e o tamanho da camiseta para fazer a compra");
        }   
    })
}


detectingWhoGenderButtonIsSelect();
detectingWhColorButtonIsSelect();
detectingWhoSizeButtonIsSelect();
getProductPrice();
sendDataToBackend();




