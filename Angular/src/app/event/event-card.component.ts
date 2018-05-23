import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-event-card',
    templateUrl: 'event-card.component.html',
    styleUrls: ['event-card-component.css']

}) export class EventCardComponent {
    
    private card : string = 'As de pique';
    private span : string = 'Span1';
    private span2 : string = "Span2";

    @Input() public nom : string = "Hacka";
    @Output() eventChangeColor = new EventEmitter();

    public subTitles() {
        return "SUBTITLE";
    };

    public changeColor() {
        this.eventChangeColor.emit(this.nom);
    };
}