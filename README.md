# ♟️ Realtime Multiplayer Chess

A simple real-time multiplayer chess game built using WebSockets .

Players can create a room, share a room code with a friend, and play a live chess game with instant move updates.

---

## 🎯 Project Objective

The primary goal of this project is to **understand and implement WebSockets** in a real-world scenario.

Chess is used as the medium to explore:
- real-time client–server communication
- multi-client synchronization
- room-based message isolation
- socket lifecycle management

This project focuses on **real-time systems**, not on building a production-scale chess platform.

---

## 🚀 Features

### 🔌 Real-Time Gameplay
- Bi-directional communication using **Socket.IO**
- Moves are transmitted instantly between players

### 🏠 Room-Based Game Sessions
- One player creates a room and receives a unique room code
- Another player joins using the same code
- Each room represents a single isolated game

### 👥 Two-Player Game Logic
- Only two players can participate in a game
- Rooms are isolated to prevent cross-game interference

### 🎲 Random Color Assignment
- Once both players join, the server randomly assigns:
  - **White** to one player
  - **Black** to the other

### ♜ Chess Engine & UI
- Game rules handled using **chess.js**
- Chessboard rendered using **react-chessboard**
- Moves are mirrored in real time across both clients

### 🔄 Socket Lifecycle Handling
- Socket connection initialized on component mount
- Event listeners registered once
- Proper cleanup and disconnection on unmount

### 📡 Event-Driven Architecture
- Client ↔ Server communication handled via custom socket events
- Clear separation between connection, game start, and move updates

---

## 🧠 Concepts Demonstrated

This project demonstrates practical understanding of:

- WebSocket fundamentals
- Socket.IO rooms
- Real-time event handling
- Multi-client coordination
- Client–server communication flow
- Preventing common socket issues (duplicate listeners, leaks)

---

## 🛠️ Tech Stack

### Frontend
- React
- react-chessboard
- socket.io-client

### Backend
- Node.js
- Socket.IO
- chess.js

---

## Environment Variables 

### ServerSide
```
MONGO_URI=""
PORT="3000"
SALT=10
JWT_SECRET_KEY="mysecretkey"
CLIENT_URL=""
```
### Client Side
```
VITE_BACKEND_URL=""
```
---

## 🧪 How It Works (High-Level)

1. Player creates a room and gets a room code
2. Second player joins using the same code
3. Server assigns colors once both players are present
4. Moves are sent from one client to the server
5. Server broadcasts the move to the opponent in real time

---

## 🔮 Future Enhancements

- Reconnection support
- Persistent game state
- Server-side move validation
- User identity and authentication
- Spectator mode

---

