import React from "react";
import { useGlobal } from "../../hooks/global";

export function Room() {
  const { setRoomName } = useGlobal();
  return (
    <div>
      <h1>Room</h1>
    </div>
  );
}
