import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AuthenticateService } from '../services/authentication.service';


@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public toastController: ToastController, private authService: AuthenticateService) { }

  logout() {
    this.authService.logoutUser().then(() => {
      this.navCtrl.navigateForward('/login');
    })
      .catch(async (error) => {
        const toast = await this.toastController.create({
          message: error,
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      });
  }

}
