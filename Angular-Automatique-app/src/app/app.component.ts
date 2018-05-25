import { Component, OnInit } from '@angular/core';
import { CardProviderService } from './card-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Smooss';

  listCards:string[];

  constructor(private cardprovider:CardProviderService){}

  public listenEvent(evt){
    console.log("J'ai reçu un évenement pour la carte "+evt+".");
  }

  public changeName(evt){
    console.log(evt); 
    this.cardprovider.add(evt);
    this.listCards = this.cardprovider.get();
    console.log(this.cardprovider.getCardsByIndex(evt));
  }

  ngOnInit() {
    this.listCards = this.cardprovider.get();
  }
}