function generateRandomIndex() {
  return Math.floor(Math.random() * 2);
}

export default function wss(io) {
  io.on("connection", (socket) => {
    try {
      socket.on("join-game", async (data) => {
        const { gameId } = data;

        socket.join(gameId);

        const socketsInRoom = await io.in(gameId).fetchSockets();
        const socketIdsInRoom = socketsInRoom.map((socket) => socket.id);

        if (socketIdsInRoom.length > 2) {
          socketIdsInRoom.pop();
          socket.leave(gameId);
        }

        if (socketIdsInRoom.length == 2) {
          const index = generateRandomIndex();

          io.to(socketIdsInRoom[index]).emit("start-game", { side: "black" });
          io.to(socketIdsInRoom[1 - index]).emit("start-game", {
            side: "white",
          });
        }
      });

      socket.on("move", async (data) => {
        const { gameId, move } = data;

        socket.to(gameId).emit("opponent-move", move);
      });

      socket.on("disconnect", () => {
        console.log("socket disconnected:", socket.id);
      });
    } catch (error) {
      console.error("Socket error:", error);
      socket.disconnect();
    }
  });
}
