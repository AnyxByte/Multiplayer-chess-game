import React, { useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";

export const ChessBoard = () => {
  const chessGameRef = useRef(new Chess());
  const chessGame = chessGameRef.current;
  const [chessPosition, setChessPosition] = useState(chessGame.fen());
  console.log("moves", chessGame._turn);

  const [turn, setTurn] = useState(chessGame._turn);

  function makeRandomMove() {
    // get all possible moves`
    const possibleMoves = chessGame.moves();

    // exit if the game is over
    if (chessGame.isGameOver()) {
      return;
    }

    // pick a random move
    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

    // make the move
    chessGame.move(randomMove);

    // update the position state
    setChessPosition(chessGame.fen());
    setTurn("w");
  }

  useEffect(() => {
    if (turn === "b") makeRandomMove();
  }, [turn]);

  function onPieceDrop({ sourceSquare, targetSquare }) {
    if (!targetSquare) return;

    try {
      chessGame.move({ from: sourceSquare, to: targetSquare, promotion: "q" });

      setChessPosition(chessGame.fen());
      setTurn("b");

      return true;
    } catch (error) {
      return false;
    }
  }

  const chessboardOptions = {
    position: chessPosition,
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
