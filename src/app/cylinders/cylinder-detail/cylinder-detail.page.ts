import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CylindersService } from '../cylinders.service';
import { Cylinder } from '../cylinder-model';

@Component({
  selector: 'app-cylinder-detail',
  templateUrl: './cylinder-detail.page.html',
  styleUrls: ['./cylinder-detail.page.scss']
})
export class CylinderDetailPage implements OnInit {
  loadedCylinder: Cylinder;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cylindersService: CylindersService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('cylinderSize')) {
        // redirect
        return;
      }
      const cylinderSize = paramMap.get('cylinderSize');
      this.loadedCylinder = this.cylindersService.getCylinder(cylinderSize);
    });
  }
}
