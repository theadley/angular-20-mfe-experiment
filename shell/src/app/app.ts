import {Component, computed, signal, effect} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  channel = new BroadcastChannel('my-channel');
  protected title = 'shell';
  protected message = signal('')
  private alteredMessage = computed(() => this.message + ': ' + new Date().getTime());

  constructor() {
    effect(() => {
      console.log(this.alteredMessage());
      this.channel.postMessage(this.alteredMessage());
    });
  }
}
