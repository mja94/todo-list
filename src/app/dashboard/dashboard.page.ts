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
  showEndDayBtn = true;
  totalGoals: number;
  totalTasks: number;
  countCompletedTasks: number;
  countCompletedGoals: number;
  progress: number;

  constructor(public navCtrl: NavController) {
    // this.user = firebase.auth().currentUser.uid;
    // console.log('userID', this.user);
    this.getData();
    if (this.morningData) {
      this.showMorningBtn = false;
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
          this.affirmation = this.morningData.affirmation;
          this.totalGoals = this.morningData.goals.length;
          this.totalTasks = this.morningData.tasks.length;
          this.countCompletedTasks = this.morningData.tasks.reduce((acc, cur) => cur.completed === true ? ++acc : acc, 0);
          this.countCompletedGoals = this.morningData.goals.reduce((acc, cur) => cur.completed === true ? ++acc : acc, 0);
          this.progress = ((this.countCompletedGoals + this.countCompletedTasks) / (this.totalGoals + this.totalTasks)) * 100;
          console.log('countCompletedTasks', this.countCompletedTasks);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

}
