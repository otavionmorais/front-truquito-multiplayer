import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/global";
import { EventsToListen } from "../../utils/constants";
import { IEventPlayerEnteredOrLeftRoom } from "./room.structures";

export function Room() {
  const { roomData, userName, socket, setRoomData } = useGlobal();

  console.log(roomData);

  const params = useParams();
  const navigate = useNavigate();

  const playerEnteredRoomEventAction = React.useCallback(
    (data: IEventPlayerEnteredOrLeftRoom) => {
      console.log("PLAYER_ENTERED_ROOM", data);

      if (socket && roomData) {
        setRoomData({
          ...roomData,
          players: [
            ...roomData.players.filter((player) => player.id !== data.id),
            {
              id: data.id,
              name: data.name,
            },
          ],
        });
      }
    },
    [roomData, socket, setRoomData]
  );

  const playerLeftRoomEventAction = React.useCallback(
    (data: IEventPlayerEnteredOrLeftRoom) => {
      console.log("PLAYER_LEFT_ROOM", data);

      if (socket && roomData) {
        setRoomData({
          ...roomData,
          players: roomData.players.filter((player) => player.id !== data.id),
        });
      }
    },
    [roomData, socket, setRoomData]
  );

  React.useEffect(() => {
    if (socket) {
      socket.off(EventsToListen.PLAYER_ENTERED_ROOM);
      socket.on(
        EventsToListen.PLAYER_ENTERED_ROOM,
        playerEnteredRoomEventAction
      );
      socket.off(EventsToListen.PLAYER_LEFT_ROOM);
      socket.on(EventsToListen.PLAYER_LEFT_ROOM, playerLeftRoomEventAction);
    }
  }, [socket, playerEnteredRoomEventAction, playerLeftRoomEventAction]);

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
        Room {roomData.name} - {userName} <br />
        Players: {roomData.players.map((player) => player.name).join(", ")}
      </h1>
    </div>
  );
}
