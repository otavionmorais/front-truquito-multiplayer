import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/global";
import { EventsToListen } from "../../utils/constants";

export function Room() {
  const { roomData, userName, socket } = useGlobal();

  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    socket?.on(EventsToListen.PLAYER_ENTERED_ROOM, (data: any) => {
      console.log(data);
    });
  }, [socket]);

  React.useEffect(() => {
    if (!roomData || roomData.name !== params.name || !userName || !socket) {
      navigate("/");
    }
  }, [navigate, roomData, params.name, userName, socket]);

  if (!roomData || roomData.name !== params.name || !userName || !socket) {
    return null;
  }

  return (
    <div>
      <h1>
        Room {roomData.name} - {userName}
      </h1>
    </div>
  );
}
