import { io } from "../index.js";

export default function wss(socket) {
  try {
    console.log("socket id: ", socket.id);

    socket.on("join-game", async (data) => {
      const { gameId } = data;

      console.log("gameId: ", gameId);

      socket.join(gameId);

      const socketsInRoom = await io.in(gameId).fetchSockets();

      console.log("socketsInRoom", socketsInRoom);
    });

    // const gameId = socket.gameId;

    // socket.join(gameId);

    // io;

    // find all the ids from a particular rooms and then select randomly who gets white and who gets black

    // start game event -> tells which one gets white or black
  } catch (error) {}
}
