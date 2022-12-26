const express = require("express");
const app = express();

const port = 5050;
const path = require("path");

const homeRouter = require("./router/homeRouter.js");
const shoppingCartRouter = require("./router/shoppingCartRouter.js");
const productsListingRouter = require("./router/productsListingRouter.js");

const loginRouter = require("./router/loginRouter.js");
const registerRouter = require("./router/registerRouter.js");
const innerProductRouter = require("./router/innerProductRouter.js");
const userRouter = require("./router/userRouter.js")
const { use } = require("./router/homeRouter.js");


//mostrando para o express que iremos usar uma
//template engine e especificando que iremos usar ejs
app.set("view engine", "ejs");


//setando para o express o caminho da pasta views
app.set("views", path.resolve("src", "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



//transformando a pasta public em estática(global)
app.use(express.static(path.resolve("src", "public")));



//Rotas
app.use(homeRouter);
app.use(shoppingCartRouter);
app.use(productsListingRouter);
app.use(loginRouter);
app.use(registerRouter);
app.use(innerProductRouter);
app.use(userRouter);



//Iniciando o servidor e escutando as conexões do caminho(porta)
app.listen(port, ()=> {
  console.log(`O servidor está rodando na porta ${port}`);
});