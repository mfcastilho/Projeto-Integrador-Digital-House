let urlAtual = window.location.href;


const maleButton = document.querySelector(".male-button");
const femaleButton = document.querySelector(".female-button");
const buttonsColor = document.querySelectorAll(".color");
const divsColorButton = document.querySelectorAll(".color-hover");
const sizeButton = document.querySelectorAll(".size");
const buyButton = document.querySelector(".buy-button");
const tagProductPrice = document.querySelector(".product-price");
const tagProductImage = document.querySelector("#image");
const tagProductName = document.querySelector("#product-name");
const tagProductId = document.getElementById("product-id")
// const tagProductQuantity = document.getElementById("quantity")

const productsImages = document.querySelectorAll(".product-image");


const form = document.querySelector("#selected-product-infos-form");

let selectedModel;
let colorSelected;
let sizeSelected;
let productPrice;
let productImage;
let productName;
let productId;
// let productQuantity;




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
            
            let colorSelected;
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
    
            if(clickedButton.classList.contains("P")){
                sizeSelected = "P";
            }else if(clickedButton.classList.contains("M")){
                sizeSelected = "M";
            }else if(clickedButton.classList.contains("G")){
                sizeSelected = "G";
            }
        });
    });
}

// function getProductQuantity(){
//     productQuantity = tagProductQuantity.innerHTML;
//     return productQuantity;
// }

function getProductId(){
    tagProductId.style.display = "inline";
    productId = tagProductId.innerText;
    // tagProductId.style.display = "none";
   
}

function getProductPrice(){
    productPrice = tagProductPrice.innerText;
}

function getProductImage(){
    productImage = tagProductImage.src;
}

function getProductName(){
    productName = tagProductName.innerText;
}

function sendDataToBackend(){
    form.addEventListener("submit", (e)=>{

        if(selectedModel /*&& colorSelected*/ && sizeSelected){
            // e.preventDefault()
            const inputModel = document.querySelector("#model-input");
            // const inputColor = document.querySelector("#input-color");
            const inputSize = document.querySelector("#input-size");
            const inputPrice = document.querySelector("#input-price");
            const inputProductName = document.querySelector("#input-product-name");
            const inputProductImage = document.querySelector("#input-product-image")
            const inputProductId = document.querySelector("#input-product-id");
            // const inputProductQuantity = document.querySelector("input-quantity-id");

            let id = tagProductId.innerHTML
            console.log("Id do produto: "+id);
            console.log(typeof id)
            inputProductId.setAttribute("value", id);
            inputModel.setAttribute("value", selectedModel);
            // inputColor.setAttribute("value", colorSelected);
            inputSize.setAttribute("value", sizeSelected);
            inputPrice.setAttribute("Value", productPrice);
            inputProductName.setAttribute("value", productName);
            inputProductImage.setAttribute("value", productImage);
            
            // inputProductQuantity.setAttribute("value", getProductQuantity());

            // console.log(inputProductQuantity.value)

        }else{
            e.preventDefault();
            console.log(selectedModel)
            Swal.fire('Selecione o tamanho da camiseta para fazer a compra',
            )
            // alert("Selecione a cor e o tamanho da camiseta para fazer a compra");
        }   
    })
}



detectingWhoGenderButtonIsSelect();
detectingWhColorButtonIsSelect();
detectingWhoSizeButtonIsSelect();
getProductPrice();
getProductImage();
getProductName();
sendDataToBackend();




