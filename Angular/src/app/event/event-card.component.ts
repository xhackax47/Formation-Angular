import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-event-card',
    templateUrl: 'event-card.component.html',
    styleUrls: ['event-card-component.css']

}) export class EventCardComponent {
    
    private card : string = 'Carte de joueur';
    private span : string = 'Span1';
    private span2 : string = "Span2";

    private isActivated = false;

    @Input() public nom : string = "Hacka";
    @Output() eventChangeColor = new EventEmitter();

    public classePlyr() {
        return "Guerrier";
    };

    public changeColor() {
        this.eventChangeColor.emit(this.nom);
        this.isActivated = !this.isActivated;
    };

    public submitForm(value) {
        console.log(value);
    }
}