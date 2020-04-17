import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, map } from 'rxjs/operators';

import { Cylinder } from './cylinder-model';

@Injectable({
  providedIn: 'root',
})
export class CylindersService {
  // tslint:disable-next-line: variable-name
  private _cylinders = new BehaviorSubject<Cylinder[]>([
    new Cylinder(
      'c1',
      '3kg',
      'Not available yet',
      '/assets/3kg.jpg',
      1000,
      'Not available',
      '3kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c2',
      '5kg',
      'Not available yet',
      '/assets/5kg.jpg',
      1500,
      'Not available',
      '5kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c3',
      '6kg',
      'Not available yet',
      '/assets/6kg.jpg',
      2350,
      'Not available',
      '6kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c4',
      '10kg',
      'Not available yet',
      '/assets/10kg.webp',
      3350,
      'Not available',
      '10kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c5',
      '12.5kg',
      'Not available yet',
      '/assets/12.5kg.jpeg',
      4500,
      'Not available',
      '12kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c6',
      '15kg',
      'Not available yet',
      '/assets/15.jpeg',
      6250,
      'Not available',
      '15kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c7',
      '25kg',
      'Not available yet',
      '/assets/25kg.jpg',
      10500,
      'Not available',
      '25kg Gas Refill',
      'abc'
    ),
    new Cylinder(
      'c8',
      '50kg',
      'Not available yet',
      '/assets/50kg.jpg',
      20350,
      'Not available',
      '50kg Gas Refill',
      'abc'
    ),
  ]);

  constructor() {}

  get cylinders() {
    return this._cylinders.asObservable();
  }

  getCylinder(cylinderSize: string) {
    return this._cylinders.pipe(
      take(1),
      // tslint:disable-next-line: variable-name
      map((_cylinders) => {
        return { ..._cylinders.find((c) => c.size === cylinderSize) };
      })
    );
  }
}
