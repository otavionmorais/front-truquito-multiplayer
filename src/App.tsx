import axios from "axios";
import React, { useCallback } from "react";
import "./App.css";
import Button from "./components/button";
import Input from "./components/input";
import { useGlobal } from "./hooks/global";
import { api } from "./services/api";

function App() {
  const [targetRoom, setTargetRoom] = React.useState("");
  const [insertedPlayerName, setInsertedPlayerName] = React.useState("");
  const [errors, setErrors] = React.useState<string[]>([]);
  const {socket} = useGlobal();

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentErrors = [];

    if (targetRoom.length < 3) {
      currentErrors.push("O nome da sala deve ter pelo menos 3 caracteres.");
    }

    if (insertedPlayerName.length < 3) {
      currentErrors.push("O nome do jogador deve ter pelo menos 3 caracteres.");
    }

    if (currentErrors.length > 0) {
      setErrors(currentErrors);
      return;
    }

    setErrors([]);

    try {
      const {data} = await api.post("/rooms/join", {
        roomName: targetRoom,
        playerName: insertedPlayerName,
        websocketClientId: socket?.id,
      });
      console.log(data);
      
    } catch(err: any) {
      let errorMessage = err.message;

      if(err.isAxiosError) {
        errorMessage = err.response.data?.message;
      }

      setErrors([errorMessage]);
    }
  }, [targetRoom, insertedPlayerName, socket]);

  const formattedErrors = React.useMemo(() => {
    return errors.map((error) => (
      <div>
        <span className="errors-style">{error}</span>
      </div>
    ));
  }, [errors]);

  return (
    <div id="app-content">
      <header className="header-style">
        <img src="Truquito.webp" alt="Truquito" className="logo-style" />
      </header>
      <section className="centered-container">
        <form className="window" onSubmit={handleSubmit}>
          <Input
            autoFocus
            value={insertedPlayerName}
            setValue={setInsertedPlayerName}
            label={"Nome do jogador"}
          />
          <Input
            value={targetRoom}
            setValue={setTargetRoom}
            label={"Nome da sala"}
          />
          <Button>
            <span>Entrar</span>
          </Button>
          <div className="errors-container">{formattedErrors}</div>
        </form>
      </section>
    </div>
  );
}

export default App;
