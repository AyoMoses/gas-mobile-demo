import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Cylinder } from './cylinder-model';
import { CylindersService } from './cylinders.service';

@Component({
  selector: 'app-cylinders',
  templateUrl: './cylinders.page.html',
  styleUrls: ['./cylinders.page.scss'],
})
export class CylindersPage implements OnInit, OnDestroy {
  cylinders: Cylinder[];
  private cylindersSub: Subscription;

  constructor(private cylindersServices: CylindersService) {}

  ngOnInit() {
    this.cylindersSub = this.cylindersServices.cylinders.subscribe(
      (cylinders) => {
        this.cylinders = cylinders;
      }
    );
  }

  // this.placesSub = this.placesService.places.subscribe((places) => {
  //   this.loadedPlaces = places;
  //   this.relevantPlaces = this.loadedPlaces;
  //   this.listedLoadedPlaces = this.relevantPlaces.slice(1);
  // });

  ngOnDestroy() {
    if (this.cylindersSub) {
      this.cylindersSub.unsubscribe();
    }
  }
}
