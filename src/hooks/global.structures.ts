export interface IGlobalContext {
  roomName?: string;
  setRoomName: (roomName: string) => void;
  userName?: string;
  setUserName: (userName: string) => void;
  viewportWidth: number;
  viewportHeight: number;
}
