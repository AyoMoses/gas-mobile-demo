import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CylindersService } from '../cylinders.service';
import { Cylinder } from '../cylinder-model';
import { ModalController, NavController } from '@ionic/angular';
import { CheckoutPage } from '../../checkout/checkout.page';

@Component({
  selector: 'app-cylinder-detail',
  templateUrl: './cylinder-detail.page.html',
  styleUrls: ['./cylinder-detail.page.scss']
})
export class CylinderDetailPage implements OnInit {
  loadedCylinder: Cylinder;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cylindersService: CylindersService,
    private router: Router,
    private modalCtrl: ModalController,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('cylinderSize')) {
        this.navCtrl.navigateBack('/cylinders');
        return;
      }
      this.loadedCylinder = this.cylindersService.getCylinder(
        paramMap.get('cylinderSize')
      );
    });
  }

  onCheckOut() {
    this.modalCtrl
      .create({
        component: CheckoutPage,
        componentProps: { selectedCylinder: this.loadedCylinder }
      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then(resultData => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('SUCCESSFUL!');
        }
      });
  }
}
