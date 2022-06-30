import { IPlayer } from "./hooks/global.structures";

export interface IJoinRoomResponse {
  room: {
    name: string;
    players: IPlayer[];
    maxPlayers: number;
  };
  player: {
    id: string;
    name: string;
    roomName: string;
  };
}
