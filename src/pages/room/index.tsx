import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useGlobal } from "../../hooks/global";

export function Room() {
  const { roomName } = useGlobal();

  const params = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (roomName !== params.name) {
      navigate("/");
    }
  }, [params.name, roomName, navigate]);

  return (
    <div>
      <h1>Room</h1>
    </div>
  );
}
