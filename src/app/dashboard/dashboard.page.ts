import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage {
  affirmation: string;
  morningData: any;
  user: string;
  showMorningBtn: boolean;
  showEndDayBtn: true;

  constructor(public navCtrl: NavController) {
    // this.user = firebase.auth().currentUser.uid;
    // console.log('userID', this.user);
    this.getData();
    if (this.morningData) {
      this.showMorningBtn = false;
      this.affirmation = this.morningData.affirmation;
    } else {
      this.showMorningBtn = true;
    }
  }

  openMorningReviewPage() {
    this.navCtrl.navigateForward('morning-review');
  }

  getData() {
    this.morningData = firebase.firestore().collection('todo')
      .where('owner', '==', 'o3zeTfQjlSephIBEVZxlYFx1G6l1').get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.morningData = doc.data().morning;
          console.log('todo', this.morningData);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

}
