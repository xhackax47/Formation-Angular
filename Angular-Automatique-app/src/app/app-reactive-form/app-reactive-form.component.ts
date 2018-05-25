import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-app-reactive-form',
  templateUrl: './app-reactive-form.component.html',
  styleUrls: ['./app-reactive-form.component.css']
})
export class AppReactiveFormComponent implements OnInit {

  formulaire;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulaire = this.formBuilder.group({
      personnage: this.formBuilder.control('Johnny'),
      role: this.formBuilder.control('',
        Validators.compose([
          Validators.pattern('[\\w\\-\\s\\/]+'),
          Validators.required])),
      age: this.formBuilder.control('', this.validatorAgePair)
    })
  }

  validatorAgePair(controle) {
    if (controle.value.trim().lenght == 0) {
      return null;
    }
    if (controle.value % 2 === 0) {
      if (controle.value < 20) {
        return { 'tooYoung': true };
      }
      if (controle.value > 40) {
        return { 'tooOld': true };
      }
      return null;
    }
    return { 'impair': true };
  }

  sendForm(value) {
    console.log(value);
  }

}
