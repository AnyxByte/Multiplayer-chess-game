import axios from "axios";
import Cookies from "js-cookie";

export const handleCreateRoom = async () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = Cookies.get("token");

  if (token) {
    return await axios.get(`${backendUrl}/room/create`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return false;
};

export const handleJoinRoom = async (code) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const token = Cookies.get("token");

  if (token) {
    const payload = {
      roomCode: code,
    };
    return await axios.post(`${backendUrl}/room/join`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  return false;
};
