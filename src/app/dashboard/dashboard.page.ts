import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {

  constructor(public navCtrl: NavController) {

  }

  openMorningReviewPage() {
    this.navCtrl.navigateForward('morning-review');
  }

}
