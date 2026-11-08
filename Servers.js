const { ExpressPeerServer } = require("peer");
const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Nexborn PeerJS Server is Running!");
});

const peerServer = ExpressPeerServer(server, {
  path: "/",
  allow_discovery: true
});

app.use("/peerjs", peerServer);

const PORT = process.env.PORT || 3000;

server.listen(PORT, "0.0.0.0", () => {
  console.log("Nexborn PeerJS server running on port " + PORT);
});
