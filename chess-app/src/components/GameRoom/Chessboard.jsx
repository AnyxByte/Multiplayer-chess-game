import React, { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import { createSocket } from "../../socket";
import { useLocation } from "react-router";

export const ChessBoard = () => {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;
  const [chessPosition, setChessPosition] = useState(chessGame.fen());

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const socketRef = useRef();

  const location = useLocation();
  const { roomCode } = location.state;
  const [side, setSide] = useState("white");

  const handleStartGame = (data) => {
    setSide(data.side);
  };

  const handleConnect = () => {
    console.log("wss connection successfull");
  };

  const handleOpponentMove = (data) => {
    console.log("data: ", data);
    chessGame.move({
      from: data.from,
      to: data.to,
      promotion: "q",
    });

    setChessPosition(chessGame.fen());

    if (chessGame.isCheck() && !chessGame.isCheckmate()) {
      alert("check");
    }

    if (chessGame.isCheckmate()) {
      alert("checkmate");
    }
    // if(chessGame)
  };

  useEffect(() => {
    const socket = createSocket();
    socketRef.current = socket;
    socket.connect();

    socket.on("connect", handleConnect);
    socket.on("start-game", handleStartGame);
    socket.on("opponent-move", handleOpponentMove);

    socket.emit("join-game", { gameId: roomCode });

    return () => {
      socket.disconnect();
      socket.off("start-game", handleStartGame);
      socket.off("opponent-move", handleOpponentMove);
      socket.off("connect", handleConnect);
    };
  }, []);

  function onPieceDrop({ sourceSquare, targetSquare, piece }) {
    if (!targetSquare) return;

    console.log("self drop");
    console.log("piece: ", piece.pieceType[0]);

    if (piece.pieceType[0] !== side[0]) return false;

    try {
      chessGame.move({ from: sourceSquare, to: targetSquare, promotion: "q" });

      socketRef.current.emit("move", {
        gameId: roomCode,
        move: { from: sourceSquare, to: targetSquare },
      });

      setChessPosition(chessGame.fen());

      if (chessGame.isCheck() && !chessGame.isCheckmate()) {
        alert("check");
      }

      if (chessGame.isCheckmate()) {
        alert("checkmate");
      }

      return true;
    } catch (error) {
      return false;
    }
  }

  const chessboardOptions = {
    position: chessPosition,
    boardOrientation: side,
    onPieceDrop,
    id: "play-vs-random",
  };
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-emerald-500/10">
      <div className="md:h-[600px] md:w-[600px] h-[300px] w-[300px]">
        <Chessboard options={chessboardOptions} />
      </div>
    </div>
  );
};
