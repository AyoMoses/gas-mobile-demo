import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'cylinders', pathMatch: 'full' },
  {
    path: 'cylinders',
    children: [
      {
        path: '',
        loadChildren: () => import('./cylinders/cylinders.module').then( m => m.CylindersPageModule),
      },
      {
        path: ':cylinderSize',
        loadChildren: () => import('./cylinders/cylinder-detail/cylinder-detail.module').then( m => m.CylinderDetailPageModule)
      }
    ]
  },
  {
    path: 'checkout',
    loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
