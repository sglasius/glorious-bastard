import { Injectable, Component, OnInit } from '@angular/core';
import { Cars } from '../interfaces/cars';
import { Bars } from '../interfaces/bars';
import { Persons } from '../interfaces/persons';

@Injectable({
  providedIn: 'root'
})

export class ValidationDataService implements OnInit {
  x: any;

  constructor() { }

  ngOnInit() { }

  // Validate Cars
  getCars(obj: any): Result<Cars> {
    if (typeof obj.brand !== "string") {
      return {
        ok: false,
        message: "Cars brand must be of type string but was"
      }
    }
    if (typeof obj.type !== "string") {
      return {
        ok: false,
        message: "Cars type must be of type string"
      }
    }

    if (typeof obj.milage !== "number") {
      return {
        ok: false,
        message: "Cars milage must be of type number"
      }
    }

    return {
      ok: true,
      value: obj
    }
  }

  // Validate Bars
  getBars(obj: any): Result<Bars> {
    if (typeof obj.name !== "string") {
      return {
        ok: false,
        message: "Bars name must be of type string"
      }
    }
    if (typeof obj.address !== "string") {
      return {
        ok: false,
        message: "Bars address must be of type string"
      }
    }

    if (typeof obj.drinks !== "object") {
      return {
        ok: false,
        message: "Bars drinks must be of type object"
      }
    }

    else if (obj.drinks.hasOwnProperty(this.x) && obj.drinks[this.x] === obj) {
      return {
        ok: false,
        message: "Tijd te kort om hier goed naar te kijken"
      }
    }

    return {
      ok: true,
      value: obj
    }
  }

  // Validate Persons
  getPersons(obj: any): Result<Persons> {
    if (typeof obj.name !== "string") {
      return {
        ok: false,
        message: "Persons name must be of type string"
      }
    }
    if (typeof obj.age !== "number") {
      return {
        ok: false,
        message: "Persons age must be of type number"
      }
    }

    // if  (!Array.isArray(obj.siblings)) {
    //   return {
    //       ok: false,
    //       message: "Persons siblings must be of type array"
    //   }
    // }

    if (typeof obj.metaData !== "object") {
      return {
        ok: false,
        message: "Persons metaData must be of type object"
      }
    }
    if (typeof obj.active !== "boolean") {
      return {
        ok: false,
        message: "Persons active must be of type boolean"
      }
    }

    return {
      ok: true,
      value: obj
    }
  }
}

export type Result<T> =
  | { ok: true, value: T }
  | { ok: false, message: string }