const {Address} = require("../models");

async function getAddresses(){

    const addresses = await Address.findAll();

    let contador = 0;
    addresses.forEach(address=>{
        console.log(`Endereço ${contador+1}: 
        Logradouro:${address.public_place}
        número:${address.number}
        bairro:${address.district}
        cidade:${address.city}
        estado:${address.state}`)

        contador++;
    })
}

getAddresses();