import { Component, OnInit, Input } from '@angular/core';
import { Cylinder } from '../cylinders/cylinder-model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
  @Input() selectedCylinder: Cylinder;
  email: 'odukoyaayodeji@gmail.com';

  public publicKey = 'pk_test_5827a2effc24a54f6dc833ca0ccfdaaf4dde997b';
  public channels = ['bank', 'card', 'ussd', 'qr'];
  public randomId = Math.floor(Date.now() / 1000);
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onCheckOut() {
    this.modalCtrl.dismiss({ message: 'This is a dummy message!' }, 'confirm');
  }

  paymentCancel() {

  }

  paymentDone(ev) {
    console.log('Event after successful payment', ev);
  }

  paymentInit() {
    
  }

}
