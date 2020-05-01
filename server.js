const express = require('express') //importa o express
const nunjucks = require('nunjucks') //importa o nunjucks

const server = express() //atribui o express ao servidor(server)
const recipes = require('./data') //importação dos dados

server.use(express.static('public')) //configuração para usar os arquivos estáticos 

server.set("view engine", "njk") //configura o motor de view para o nunjucks

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// Rota principal
server.get("/", function(require,response){
    return response.render("index", {recipes}) //responde a renderização da página index
}) 

server.get("/about", function(require, response) {
    return response.render("about")
})

server.get("/recipes", function(require,response) {
    return response.render("recipes", {recipes})
})

server.get("/recipes/:index", function (require, response) {
    const recipeIndex = require.params.index;

    const recipe = recipes.find(function(recipe) {
        return recipe.title == recipeIndex
    })

    return response.render("details", {item: recipe})
})

server.use(function (req, res) {
    res.status(404).render("erro");
})

server.listen(5000, function() {
    console.log("server is running")
})