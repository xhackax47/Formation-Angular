import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Smooss';

  listCards : string[] = [
    'Riri',
    'Fifi',
    'Loulou',
    'Pandi',
    'Panda',
    'Boubou',
    'Panda',
    'Boubou',
    'Fifi',
  ]

  public listenEvent(evt){
    console.log("J'ai reçu un évenement pour la carte "+evt+".");
  }

  public changeName(evt){
    this.listCards.push(evt);
  }

}