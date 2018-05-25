import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-event-card',
    templateUrl: 'event-card.component.html',
    styleUrls: ['event-card.component.css']
}) export class EventCardComponent {

    @Input() public name : string = 'oui abslument';
    @Output() eventColorChange = new EventEmitter();
    @Output() eventChangeName = new EventEmitter();


    private isActive = false;

    public subtitle() : string{
        return "ouais";
    }

    public colorChange(){
        this.isActive = !this.isActive;
        this.eventColorChange.emit(this.name);
    }

    public sendForm(value){
        this.name = value.auteur;
        this.eventChangeName.emit(this.name);
    }

}