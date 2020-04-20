import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import {
  NavController,
  ModalController,
  LoadingController,
  AlertController,
} from '@ionic/angular';
import { switchMap, take } from 'rxjs/operators';

import { AuthService } from '../../auth/auth.service';
import { CylindersService } from '../cylinders.service';
import { Cylinder } from '../cylinder-model';
import { CheckoutPage } from '../../checkout/checkout.page';

@Component({
  selector: 'app-cylinder-detail',
  templateUrl: './cylinder-detail.page.html',
  styleUrls: ['./cylinder-detail.page.scss'],
})
export class CylinderDetailPage implements OnInit, OnDestroy {
  cylinder: Cylinder;
  isLoading = false;
  private cylinderSub: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private cylindersService: CylindersService,
    private modalCtrl: ModalController,
    private navCtrl: NavController,
    // private loadingCtrl: LoadingController,
    private authService: AuthService,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('cylinderSize')) {
        this.navCtrl.navigateBack('/cylinders');
        return;
      }
      // this.cylinderSub = this.cylindersService
      //   .getCylinder(paramMap.get('cylinderSize'))
      //   .subscribe((cylinder) => {
      //     this.cylinder = cylinder;
      //   });
      this.isLoading = true;
      let fetchUserId: string;
      this.authService.userId
        .pipe(
          take(1),
          switchMap((userId) => {
            if (!userId) {
              throw new Error('Found no user!');
            }
            fetchUserId = userId;
            return this.cylindersService.getCylinder(
              paramMap.get('cylinderSize')
            );
          })
        )
        .subscribe(
          (cylinder) => {
            this.cylinder = cylinder;
            this.isLoading = false;
          },
          (error) => {
            this.alertCtrl
              .create({
                header: 'An error occured',
                message: 'could not load cylinders.',
                buttons: [
                  {
                    text: 'Okay',
                    handler: () => {
                      this.router.navigate(['/cylinders']);
                    },
                  },
                ],
              })
              .then((alertEl) => alertEl.present());
          }
        );
    });
  }

  onCheckOut() {
    this.modalCtrl
      .create({
        component: CheckoutPage,
        componentProps: { selectedCylinder: this.cylinder },
      })
      .then((modalEl) => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then((resultData) => {
        console.log(resultData.data, resultData.role);
        if (resultData.role === 'confirm') {
          console.log('SUCCESSFUL!');
        }
      });
  }

  ngOnDestroy() {
    if (this.cylinderSub) {
      this.cylinderSub.unsubscribe();
    }
  }
}
