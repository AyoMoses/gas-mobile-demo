
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Angular4PaystackModule } from 'angular4-paystack';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CheckoutPage } from './checkout/checkout.page';

@NgModule({
  declarations: [AppComponent, CheckoutPage],
  entryComponents: [CheckoutPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Angular4PaystackModule.forRoot('pk_test_5827a2effc24a54f6dc833ca0ccfdaaf4dde997b'),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
