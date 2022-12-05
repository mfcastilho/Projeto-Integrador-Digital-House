const express = require("express");
const app = express();

const port = 5050;
const path = require("path");
const homeRouter = require("./router/homeRouter.js");


//mostrando para p express que iremos usar uma
//template engine e especificando que iremos usar ejs
app.set("view engine", "ejs");


//setando para express o caminho da pasta views
app.set("views", path.resolve("src", "views"));

app.use(express.json());


app.use(express.static(path.resolve("src", "public")));

app.use(homeRouter);





app.listen(port, ()=>{
  console.log(`O servidor está rodando na porta ${port}`);
});