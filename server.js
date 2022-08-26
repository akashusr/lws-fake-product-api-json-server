const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middleWares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.use(middleWares);
server.use(router);

server.listen(port);
