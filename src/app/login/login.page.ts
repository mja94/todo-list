import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string;
  password: string;

  constructor(public toastController: ToastController, public navCtrl: NavController) { }

  ngOnInit() {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  }

  login() {
    firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then((data) => {
        this.navCtrl.navigateForward('dashboard');
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
