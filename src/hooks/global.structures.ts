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

export interface IPlayer {
  id: string;
  name: string;
  roomName?: string;
}

export interface IRoomData {
  name: string;
  players: IPlayer[];
  maxPlayers: number;
}
