import { Component, OnDestroy, OnInit } from '@angular/core';
import { Socket } from 'socket.io-client';
import { WebSocketEventsEnum } from 'src/app/enumerators/web-socket.events';
import { MessageModel } from 'src/app/interface/message-interface';
import { ServerResponse } from 'src/app/interface/server-response.interface';
import {
  UpdateFunction,
  WebSocketConnectionUtils,
} from 'src/app/utils/web-socket-connections.utils';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {
  messages: MessageModel[] = [];
  private CHAT_ONLINE_EVENT = WebSocketEventsEnum.CHAT_ONLINE;
  private webSocketUtils: WebSocketConnectionUtils;
  private sessionUser: string;
  private socket: Socket;

  constructor() {
    this.webSocketUtils = new WebSocketConnectionUtils();
    this.sessionUser = this.webSocketUtils.sessionuser;
    this.socket = this.webSocketUtils.socket;
  }

  ngOnInit(): void {
    this.webSocketUtils.connect();
    this.socket.on(
      this.CHAT_ONLINE_EVENT,
      (user: string, serverResponse: any) => {
        this.updateMessages(user, this.sessionUser == user, serverResponse);
      }
    );
  }
  ngOnDestroy(): void {
    this.socket.off(this.CHAT_ONLINE_EVENT, (serverResponse: any) => {
      this.updateMessages('server', false, serverResponse);
    });
    this.webSocketUtils.disconnect();
  }

  updateMessages(sender: string, sendedByMe: boolean, message: string) {
    let newMessage = {
      name: sender,
      message: message,
      sended: sendedByMe,
    } as MessageModel;
    newMessage.id = Date.now();
    this.messages = [newMessage, ...this.messages];
    //this.scrollChatToBottom();
  }
  onSubmit(e: Event | any) {
    e.preventDefault();
    let inputValue = this.readForm(e);
    if (inputValue) this.sendMessage(inputValue);
  }
  sendMessage(newMessage: string): void {
    this.socket.emit(this.CHAT_ONLINE_EVENT, this.sessionUser, newMessage);
    this.clearInput();
  }
  scrollChatToBottom() {
    let messagesUl = document.getElementById("messages");
    if(!messagesUl) return;
    messagesUl.scroll({left: 0, top: window.innerHeight, behavior: "smooth"} as ScrollToOptions);
  }
  readForm(e: Event | any): string | undefined {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as HTMLFormElement);
    return formData.get('input')?.toString();
  }
  clearInput() {
    let messageInput: HTMLInputElement = document.getElementById(
      'input'
    ) as HTMLInputElement;
    if (messageInput !== null && messageInput.value != undefined)
      messageInput.value = '';
  }
}
