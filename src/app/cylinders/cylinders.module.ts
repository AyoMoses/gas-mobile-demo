import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CylindersPageRoutingModule } from './cylinders-routing.module';

import { CylindersPage } from './cylinders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CylindersPageRoutingModule
  ],
  declarations: [CylindersPage]
})
export class CylindersPageModule {}
