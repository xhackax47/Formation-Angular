import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
    selector: '[customHighlight]'
}) export class CustomHighLight {
    
    @Input('pendant') couleurAuSurvol = 'beige';
    @Input('apres') couleurApresSurvol = 'red';

    @HostBinding('style.backgroundColor') laCouleurCourante;

    @HostListener('mouseenter') debuteSurvol(evenement:Event){
        this.laCouleurCourante = this.couleurAuSurvol;
        this.elementRef.nativeElement.textContent += 'laCouleurCourante est '+this.laCouleurCourante;
        //this.elementRef.nativeElement.style.backgroundColor = this.couleurAuSurvol;
    }
    @HostListener('mouseleave') finSurvol(evenement:Event){
        this.laCouleurCourante = this.couleurApresSurvol;
        //this.elementRef.nativeElement.style.backgroundColor = this.couleurApresSurvol;
    }

    constructor(private elementRef : ElementRef){

    }

    ngOnInit(){
        //this.elementRef.nativeElement.style.backgroundColor = 'lightgreen';
    }

}