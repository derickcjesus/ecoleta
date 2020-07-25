const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

//.use é uma função para configurar o servidor criado
server.use(express.static("public"))

nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server.get("/", (req, res) => {
   return res.render("index.html")
})

server.get("/create-point", (req, res) => {
   return res.render("create-point.html", )
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

//ligando o servidor
server.listen(3000)