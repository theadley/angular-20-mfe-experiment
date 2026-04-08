import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  messages = signal<string[]>([])
  // Create or join a channel
   channel = new BroadcastChannel('my-channel');

  constructor() {
    // Listen for messages
    this.channel.onmessage = (event) => {
      console.log('Received message:', event.data);
      this.messages.set([...this.messages(), event.data])
    };
  }



}
