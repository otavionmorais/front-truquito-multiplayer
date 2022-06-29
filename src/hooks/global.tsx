import React from "react";
import { IGlobalContext, IRoomData } from "./global.structures";
import { io, Socket } from "socket.io-client";
import { API_URL } from "../services/api";

const GlobalContext: React.Context<IGlobalContext> =
  React.createContext<IGlobalContext>({
    viewportHeight: 0,
    viewportWidth: 0,
    setRoomData: () => {},
    setUserName: () => {},
    socket: null,
  });

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = React.useState(
    window.innerHeight
  );
  const [roomData, setRoomData] = React.useState<IRoomData | undefined>();
  const [userName, setUserName] = React.useState<string | undefined>();
  const [socket] = React.useState<Socket | null>(io(API_URL));

  function handleResize() {
    setViewportWidth(window.innerWidth);
    setViewportHeight(window.innerHeight);
  }

  window.addEventListener("resize", handleResize);

  return (
    <GlobalContext.Provider
      value={{
        viewportWidth,
        viewportHeight,
        roomData,
        setRoomData,
        userName,
        setUserName,
        socket,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobal() {
  const context = React.useContext(GlobalContext);
  return context;
}
