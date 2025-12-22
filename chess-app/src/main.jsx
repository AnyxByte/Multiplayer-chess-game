import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { ChessBoard } from "./components/GameRoom/Chessboard.jsx";
import { CreateRoom } from "./components/Lobby/CreateRoom.jsx";
import Login from "./components/Auth/Login.jsx";
// import { Login } from "./components/Auth/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/game",
    element: <ChessBoard />,
  },
  {
    path: "/lobby",
    element: <CreateRoom />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
