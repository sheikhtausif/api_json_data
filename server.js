const jsonServer = require('json-server');
const express = require('express');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();
const port = process.env.PORT || 5000;
const app = express();
app.use(express.json())

server.use(middleware);
server.use(router);

app.get('/', (req, res) => {
    res.send("API is running...")
})

server.listen(port, () => {
    console.log("server is running...")
});