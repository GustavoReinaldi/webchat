import { Socket, io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { WebSocketEventsEnum } from '../enumerators/web-socket.events';
import { ServerResponse } from '../interface/server-response.interface';

export type UpdateFunction = (responseServer : any) => { };

export class WebSocketConnectionUtils {
  private __socket: Socket;
  private isConnected: Boolean;
  private __sessionuser : string;

  constructor() {
    this.__socket = io(environment.WEB_SOCKET_URL);
    this.__sessionuser = `user${Date.now()}`;
    this.isConnected = false;
  }
  connect(): void {
    if (!this.isConnected) {
      this.socket.connect();
      this.isConnected = true;
    }
  }
  disconnect(): void {
    if (this.isConnected) {
      this.socket.disconnect();
      this.isConnected = false;
    }
  }
  get socket() {
    return this.__socket;
  }
  get sessionuser(){
    return this.__sessionuser;
  }

  unlistenEvent(
    event: WebSocketEventsEnum,
    callback: (serverResponse: any) => {}
  ) {
    this.socket.off(event, callback);
  }
}
