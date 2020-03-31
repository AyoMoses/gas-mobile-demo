import { Injectable } from '@angular/core';

import { Cylinder } from './cylinder-model';

@Injectable({
  providedIn: 'root'
})
export class CylindersService {
  private cylinders: Cylinder[] = [
    {
      size: '3kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/3kg.jpg',
      price: 1000,
      weight: 'Not available',
      title: '3kg Gas Refill'
    },
    {
      size: '5kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/5kg.jpg',
      price: 1500,
      weight: 'Not available',
      title: '5kg Gas Refill'
    },
    {
      size: '6kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/6kg.jpg',
      price: 2350,
      weight: 'Not available',
      title: '6kg Gas Refill'
    },
    {
      size: '10kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/10kg.webp',
      price: 3350,
      weight: 'Not available',
      title: '10kg Gas Refill'
    },
    {
      size: '12.5kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/12.5kg.jpeg',
      price: 4500,
      weight: 'Not available',
      title: '12kg Gas Refill'
    },
    {
      size: '15kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/15.jpeg',
      price: 6250,
      weight: 'Not available',
      title: '15kg Gas Refill'
    },
    {
      size: '25kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/25kg.jpg',
      price: 10500,
      weight: 'Not available',
      title: '25kg Gas Refill'
    },
    {
      size: '50kg',
      productDetail: 'Not available yet',
      imageUrl: '/assets/50kg.jpg',
      price: 20350,
      weight: 'Not available',
      title: '50kg Gas Refill'
    },
  ];

  constructor() { }

  getAllCylinders() {
    return [...this.cylinders];
  }

  getCylinder(cylinderSize: string) {
    return {...this.cylinders.find(cylinder => {
      return cylinder.size === cylinderSize;
    })};
  }
}
