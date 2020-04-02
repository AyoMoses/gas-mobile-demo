import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CylinderDetailPageRoutingModule } from './cylinder-detail-routing.module';

import { CylinderDetailPage } from './cylinder-detail.page';
import { CheckoutComponent } from 'src/app/checkout/checkout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CylinderDetailPageRoutingModule
  ],
  declarations: [CylinderDetailPage, CheckoutComponent],
  entryComponents: [CheckoutComponent]
})
export class CylinderDetailPageModule {}
