import React from "react";
import { IGlobalContext } from "./global.structures";

const GlobalContext = React.createContext<IGlobalContext>({
  viewportHeight: 0,
  viewportWidth: 0,
  setRoomName: () => {},
  setUserName: () => {},
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [viewportWidth, setViewportWidth] = React.useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = React.useState(
    window.innerHeight
  );
  const [roomName, setRoomName] = React.useState<string | undefined>();
  const [userName, setUserName] = React.useState<string | undefined>();

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
        roomName,
        setRoomName,
        userName,
        setUserName,
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
