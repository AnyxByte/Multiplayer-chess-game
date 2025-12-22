import React, { useState } from "react";
import { useNavigate } from "react-router";

export const App = () => {
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/game");
  };

  const handleRegister = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex items-center justify-center font-sans relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative z-10 w-full max-w-md px-6">
        {/* Logo/Header */}
        <div className="text-center mb-10">
          <div className="inline-block p-3 bg-emerald-500/10 rounded-2xl mb-4 border border-emerald-500/20">
            <svg
              className="w-12 h-12 text-emerald-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.47 13.18,11.24L12.5,4.19C12.43,3.45 11.81,2.88 11.06,2.88C10.31,2.88 9.69,3.45 9.62,4.19L8.94,11.24C7.86,10.47 6.54,10 5,10C3.34,10 2,11.34 2,13C2,14.05 2.54,14.96 3.35,15.5C3.12,15.94 3,16.45 3,17V19H21V17C21,16.45 20.88,15.94 20.65,15.5C21.46,14.96 22,14.05 22,13C22,11.34 20.66,10 19,10Z" />
            </svg>{" "}
            on
          </div>
          <h1 className="text-5xl font-black tracking-tighter italic">
            CHESS<span className="text-emerald-500">MATE</span>
          </h1>
          <p className="text-neutral-400 mt-2 font-medium uppercase tracking-widest text-xs">
            Grandmaster Protocol v1.0
          </p>
        </div>

        {/* Card */}
        <div className="bg-neutral-900/50 backdrop-blur-xl border border-white/5 p-8 rounded-3xl shadow-2xl">
          <div className="space-y-4">
            {/* Join Room Section */}
            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase ml-1 mb-2">
                Join an existing match
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-emerald-500 transition-all placeholder:text-neutral-700"
                />
              </div>
            </div>

            <button
              onClick={handleNavigate}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold py-4 rounded-xl transition-all transform active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            >
              JOIN MATCH
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="h-px bg-neutral-800 flex-1"></div>
              <span className="text-neutral-600 text-xs font-bold">OR</span>
              <div className="h-px bg-neutral-800 flex-1"></div>
            </div>

            {/* Create Room Section */}
            <button className="w-full bg-transparent border border-neutral-700 hover:border-neutral-500 text-white font-bold py-4 rounded-xl transition-all active:scale-95">
              CREATE PRIVATE ROOM
            </button>

            <div
              onClick={handleRegister}
              className="mt-4 text-white text-center cursor-pointer font-semibold underline underline-offset-4"
            >
              Register Here !!!
            </div>
          </div>
        </div>

        {/* Footer info */}
        <p className="text-center text-neutral-600 text-sm mt-8">
          Ready for your next move? <br />
          <span className="text-neutral-500">
            Invite a friend to settle the score.
          </span>
        </p>
      </div>
    </div>
  );
};
