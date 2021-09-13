import { Component, OnInit } from '@angular/core';
import { ValidationDataService } from './services/validation-data.service';
import { Validation } from './interfaces/validation';
import { carObjF, carObj } from '../../shared/examples/cars';
import { barObjF, barObj } from '../../shared/examples/bars';
import { personObjF, personObj } from '../../shared/examples/persons';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})

export class ValidationComponent implements OnInit {

  constructor(
    private validationDataService: ValidationDataService
  ) { }

  ngOnInit() {
  }

  validateObjects(): void {
    const car = this.validationDataService.getCars(carObj);
    console.log("Validation for carObj:");
    console.log(car);

    const carF = this.validationDataService.getCars(carObjF);
    console.log("Validation for carObj:");
    console.log(carF);

    const bar = this.validationDataService.getBars(barObj);
    console.log("Validation for barObj:");
    console.log(bar);

    const barF = this.validationDataService.getBars(barObjF);
    console.log("Validation for barObjF:");
    console.log(barF);

    const person = this.validationDataService.getPersons(personObj);
    console.log("Validation for personObj:");
    console.log(person);

    const personF = this.validationDataService.getPersons(personObjF);
    console.log("Validation for personObjF:");
    console.log(personF);
  }

}
