import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { Cylinder } from '../cylinders/cylinder-model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  @Input() selectedCylinder: Cylinder;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onCheckOut() {
    this.modalCtrl.dismiss({message: 'This is a dummy message!'}, 'confirm');
  }

}
