import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Hacka';
  user1: string = 'Utilisateur 1';
  user2: string = 'Utilisateur 2';

  public listenEvent(evt) {
    console.log("Listening Events....");
    console.log("Event changeColor detected !!!")
  }
}


