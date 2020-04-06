import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CylinderDetailPageRoutingModule } from './cylinder-detail-routing.module';

import { CylinderDetailPage } from './cylinder-detail.page';

import { CheckoutPage } from 'src/app/checkout/checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CylinderDetailPageRoutingModule
  ],
  declarations: [CylinderDetailPage, CheckoutPage],
  entryComponents: [CheckoutPage]
})
export class CylinderDetailPageModule {}
