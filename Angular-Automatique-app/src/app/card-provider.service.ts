import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CardProviderService {

  listCards : string[] = [];

  constructor(private HTTP: HttpClient) {     
  var nbResults = '4';
  const options = {params: new HttpParams().set('results', nbResults)}


  this.HTTP.get("https://randomuser.me/api/", options)
  .subscribe(res => {
  //this.listCards = [];
  let result = res['results'];
  for (let personne of result) {
    console.log(personne);
    this.listCards.push(personne.name.first);
  }
  });
}
  
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
