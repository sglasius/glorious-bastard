import { Component, OnInit } from '@angular/core';
import { ValidationComponent } from '../validation/validation.component'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private validation: ValidationComponent
  ) { }

  ngOnInit() {
  }
  next: boolean = false;

  triggerValidation() {
    this.validation.validateObjects();
    this.next = true;
  }

}