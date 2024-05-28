import express from "express";
import { createServer, Server } from "http";
import { Server as Io } from "socket.io";

class App {
  public app: express.Application;
  public server: Server;
  private socketIo: Io;

  constructor() {
    this.app = express();
    this.server = createServer(this.app);
    this.socketIo = new Io(this.server, {
      cors: {
        origin: "*",
      },
    });

    this.socketIo.on("connection", (socket) => {
      console.log("conexão");

      socket.on("disconnect", () => {
        console.log("desconectado");
      });

      socket.on("message", (message) => {
        console.log(message);
        // socket.broadcast.emit("message", message);
        socket.emit("message", message);
      });
    });
  }
}

export default App;
