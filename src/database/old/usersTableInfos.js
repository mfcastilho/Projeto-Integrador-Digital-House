const bcrypt = require("bcrypt");
const mileneHashPassword = bcrypt.hashSync("@M1234", 10);
const mariaHashPassword = bcrypt.hashSync("@M1234", 10);


const users = [
    {
        id: "7a8b9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s",
        name: "Milene Takahashi",
        cpf: "33456678908",
        email: "milene@gmail.com",
        gender: "feminino",
        password: "@Milene1",
        tel: "11999887766",
        is_admin: true,
        address_id: "1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        id: "9c0d1e2f3g4h5i6j7k8l9m0n1o2p3q4r5s6t7u8",
        name: "Maria Mariana",
        cpf: "86793874628",
        gender: "feminino",
        email: "maria@hotmail.com",
        password: "@Maria12",
        tel: "21988765431",
        is_admin: false,
        address_id: "5d6c7b8a9f0e1d2c3b4a58439e0f1d2c3b4a58",
        createdAt: new Date(),
        updatedAt: new Date()
    }
]

module.exports = users;