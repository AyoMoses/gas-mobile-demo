import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylinderDetailPage } from './cylinder-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CylinderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CylinderDetailPageRoutingModule {}
