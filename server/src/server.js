const http = require("http");

const { app } = require("./app");

const PORT = 8000;

const server = http.createServer(app);

const startServer = () => {
  server.listen(PORT, () => {
    console.log(`listening to port ${PORT} 🚀 .....`);
  });
};

startServer();
