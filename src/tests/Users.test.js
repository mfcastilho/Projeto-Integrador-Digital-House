const {User, Address} = require("../models");

async function getUsers(){
    const users = await User.findAll({
        include:[{
            model: Address,
            as: "address",
            require: false
        }],
        raw: false
    })
    
    users.forEach(user=>{
        console.log(`Nome do usuário:${user.name}
        cpf:${user.cpf}
        email:${user.email}
        telefone:${user.tel}
        senha:${user.password}
        isAdmin:${user.is_admin}
        Endereço:${user.address.public_place} - ${user.address.number}
        bairro:${user.address.district}
        cidade:${user.address.city} - ${user.address.state}\n\n\n`);
    })
}



async function getUser(){

    const id = "7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s";

    const user = await User.findOne({
        where: {id:id},    
    });

    console.log(user);

  }

  async function getUserByPk(){

    const id = "9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8";
    const user = await User.findByPk(id, {
        include:{
            model:Address,
            as:"address",
            require:false
        },
        raw:false
    });

    console.log(user);
  }

  getUsers();
//getUser();
//getUserByPk();