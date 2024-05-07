import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  private hubConnection: signalR.HubConnection;

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiUrl}/blogHub`)
      .build();

    this.hubConnection.onclose((error) => {
      console.error('SignalR connection closed:', error);
      // Handle reconnection logic here if needed
    });
  }

  startConnection(): void {
    this.hubConnection
      .start()
      .then(() => console.log('Connection started!'))
      .catch((err) => {
        console.error('Error while establishing connection:', err);
        // Retry connection or handle the error as needed
      });
  }

  addMessageListener(callback: (user: string, message: string) => void): void {
    this.hubConnection.on('ReceiveMessage', callback);
  }

  sendMessage(user: string, message: string): void {
    this.hubConnection.invoke('SendMessage', user, message)
      .catch((err) => console.error('Error sending message:', err));
  }
}
