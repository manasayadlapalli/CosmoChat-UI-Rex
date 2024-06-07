const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/db.json'); 
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3500; // <== You can change the port

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
