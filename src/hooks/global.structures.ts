import { Socket } from "socket.io-client";

export interface IGlobalContext {
  roomData?: IRoomData;
  setRoomData: (roomData: IRoomData) => void;
  userName?: string;
  setUserName: (userName: string) => void;
  viewportWidth: number;
  viewportHeight: number;
  socket: Socket | null;
}

export interface IRoomData {
  name: string;
  players: string[];
  maxPlayers: number;
}
