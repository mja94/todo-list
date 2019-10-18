import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(public toastController: ToastController, public navCtrl: NavController, private authService: AuthenticateService) {

  }

  ngOnInit() {

  }

  login() {
    const value = { email: this.email, password: this.password };
    this.authService.loginUser(value)
      .then((res) => {
        this.navCtrl.navigateForward('/tabs(dashboard:dashboard)');
      }).catch(async (err) => {
        const toast = await this.toastController.create({
          message: 'The email address and / or password is invalid.',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      });
  }

}
