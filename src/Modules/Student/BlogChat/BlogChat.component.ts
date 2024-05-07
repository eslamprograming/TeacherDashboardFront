import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../SignalR.service';

@Component({
  selector: 'app-BlogChat',
  templateUrl: './BlogChat.component.html',
  styleUrls: ['./BlogChat.component.css']
})
export class BlogChatComponent implements OnInit {

  constructor(private signalRService: SignalRService) { }

  sentMessages: { user: string, message: string }[] = [];
  receivedMessages: { user: string, message: string }[] = [];

    ngOnInit(): void {
        this.signalRService.startConnection();
        // this.signalRService.addMessageListener((user, message) => {
        //     console.log(`${user} says: ${message}`);
        //     // Handle incoming messages
        // });
        
    // Subscribe to received messages
    this.signalRService.addMessageListener((user, message) => {
      this.receivedMessages.push({ user, message });
    });
    }
    

    
  sendMessage(user: string, message: string): void {
    // Send message and add to sent messages
    this.signalRService.sendMessage(user, message);
    this.sentMessages.push({ user, message });
  }
}
