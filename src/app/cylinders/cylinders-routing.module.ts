import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CylindersPage } from './cylinders.page';

const routes: Routes = [
  {
    path: '',
    component: CylindersPage
  },
  {
    path: 'cylinder-detail',
    loadChildren: () => import('./cylinder-detail/cylinder-detail.module').then( m => m.CylinderDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CylindersPageRoutingModule {}
