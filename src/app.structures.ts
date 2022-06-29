export interface IJoinRoomResponse {
  room: {
    name: string;
    players: string[];
    maxPlayers: number;
  };
  player: {
    id: string;
    name: string;
    roomName: string;
  };
}
