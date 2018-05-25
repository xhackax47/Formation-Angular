import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardProviderService {

  listCards : string[] = [
    'Riri',
    'Fifi',
  ];

  constructor() { }

  
  public get() : string [] {
    return this.listCards;
  }

  public add(newCard) {
    this.listCards.push(newCard);
  }

  public getCardsByIndex(index):string {
    return this.listCards[index]; 
  }
  
}
