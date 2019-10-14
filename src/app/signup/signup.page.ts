import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string;
  password: string;

  constructor(public toastController: ToastController, public navCtrl: NavController) { }

  ngOnInit() {

  }

  signup() {
    firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(async (data) => {
        const toast = await this.toastController.create({
          message: 'The account was succesfully created',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.navCtrl.navigateForward('/dashboard');
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
