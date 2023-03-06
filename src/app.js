//IMPORTAÇÕES
const express = require("express");
const app = express();
const session = require("express-session");



//VARIÁVEIS 
const port = 5050;
const path = require("path");


//IMPORTAÇÕES DAS ROTAS
const homeRouter = require("./router/homeRouter.js");
const shoppingCartRouter = require("./router/shoppingCartRouter.js");
const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter.js")


//mostrando para o express que iremos usar uma
//template engine e especificando que iremos usar ejs
app.set("view engine", "ejs");

//setando para o express o caminho da pasta views
app.set("views", path.resolve("src", "views"));

app.use(session({
  secret:"mysecretpassword",
  resave: false,
  saveUninitialized: false
}))

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



//transformando a pasta public em estática(global)
app.use(express.static(path.resolve("src", "public")));



//Rotas
app.use(homeRouter);
app.use(shoppingCartRouter);
app.use(authRouter);
app.use(userRouter);



//Iniciando o servidor e escutando as conexões do caminho(porta)
app.listen(port, ()=> {
  console.log(`O servidor está rodando na porta ${port}`);
});