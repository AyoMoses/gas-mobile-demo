import { Component, OnInit } from '@angular/core';
import { Cylinder } from './cylinder-model';
import { CylindersService } from './cylinders.service';

@Component({
  selector: 'app-cylinders',
  templateUrl: './cylinders.page.html',
  styleUrls: ['./cylinders.page.scss'],
})
export class CylindersPage implements OnInit {
  cylinders: Cylinder[];

  constructor(private cylindersServices: CylindersService) { }

  ngOnInit() {
    this.cylinders = this.cylindersServices.getAllCylinders();
  }

}
