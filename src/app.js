//IMPORTAÇÕES
const express = require("express");
const app = express();
const session = require("express-session");
const methodOverride = require("method-override");






//VARIÁVEIS 
const port = 5050;
const path = require("path");


//IMPORTAÇÕES DAS ROTAS
const homeRouter = require("./router/homeRouter.js");
const shoppingCartRouter = require("./router/shoppingCartRouter.js");
const authRouter = require("./router/authRouter");
const userRouter = require("./router/userRouter.js");
const adminRouter = require("./router/adminRouter");
const checkoutRouter = require("./router/checkoutRouter");
const searchRouter = require("./router/searchRouter");



//mostrando para o express que iremos usar uma
//template engine e especificando que iremos usar ejs
app.set("view engine", "ejs");

//setando para o express o caminho da pasta views
app.set("views", path.resolve("src", "views"));

//configuração da session
app.use(session({
  secret:"mysecretpassword",
  resave: true,
  saveUninitialized: true
}));



app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(methodOverride("_method"));


//transformando a pasta public em estática(global)
app.use(express.static(path.resolve("src", "public")));



//Rotas
app.use(searchRouter);
app.use(homeRouter);
app.use(shoppingCartRouter);
app.use(checkoutRouter);
app.use(authRouter);
app.use(userRouter);
app.use(adminRouter);






//Iniciando o servidor e escutando as conexões do caminho(porta)
app.listen(port, ()=> {
  console.log(`O servidor está rodando na porta ${port}`);
});