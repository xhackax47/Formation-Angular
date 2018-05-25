import { Pipe } from '@angular/core';

@Pipe({
    name: 'arraySingler',
    pure: false
}) export class ArraySinglerPipe{
    transform(value){
        let sortie = [];
        let belleSortie = "";
        for(let element of value){
            if(sortie.indexOf(element) == -1){
                sortie.push(element);
                belleSortie += "lala, "+element;
            }
        }
        return belleSortie;
    }
}