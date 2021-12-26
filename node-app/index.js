var chat = require("./chat");
var socketio = require("socket.io");
var cors = require("cors");
const app = require("express")();
const http = require("http");
const PORT = 8080;

app.use(cors());
/**
 * Create HTTP server.
 */

var server = http.createServer(app);
var io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

chat(io);
