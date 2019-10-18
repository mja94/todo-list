import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string;
  password: string;

  constructor(public toastController: ToastController, public navCtrl: NavController, private authService: AuthenticateService) { }

  ngOnInit() {

  }

  signup() {
    const value = { email: this.email, password: this.password };
    this.authService.registerUser(value)
      .then(async (data) => {
        const toast = await this.toastController.create({
          message: 'The account was succesfully created',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.navCtrl.navigateForward('/tabs(dashboard:dashboard)');
      }).catch(async (err) => {
        const toast = await this.toastController.create({
          message: err,
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      });
  }
}
