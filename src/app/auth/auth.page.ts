import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  // property
  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl.create({keyboardClose: true, message: 'Logging you in...'})
    .then(loadingEl => {
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/cylinders');
      }, 1500);
    });
  }

  // switch our authentication mode based on state. we invert. if its false its true if its true its false
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // IF YOU HAVE A VALID FORM THEN WE MAKE A POSITIVE IF CHECK AND PROCEED TO THE BELOW
    const email = form.value.email;
    const password = form.value.password;
    console.log(email, password);

    if (this.isLogin) {
      // send a request to login to servers
    } else {
      // send request to signup to servers
    }
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }

}
