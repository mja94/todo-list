import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as firebase from 'firebase';



@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss']
})
export class DashboardPage implements OnInit {
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
  gratefulArr: [];

  constructor(public navCtrl: NavController) {
    this.user = firebase.auth().currentUser.uid;
    this.affirmation = '';
  }

  ngOnInit() {
    console.log('didload');
    this.getData();
    if (this.morningData.length > 0) {
      console.log('morning', this.morningData.length);
      this.showMorningBtn = false;
    } else {
      this.showMorningBtn = true;
    }
    this.changeRef.detectChanges();
  }

  openMorningReviewPage() {
    this.navCtrl.navigateForward('morning-review');
  }

  getData() {
    this.morningData = firebase.firestore().collection('todo')
      .where('owner', '==', this.user).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log('inside', this.user);
          this.morningData = doc.data().morning;
          this.affirmation = this.morningData.affirmation;
          this.gratefulArr = this.morningData.grateful;
          this.totalGoals = this.morningData.goals.length;
          this.totalTasks = this.morningData.tasks.length;
          this.countCompletedTasks = this.morningData.tasks.reduce((acc, cur) => cur.completed === true ? ++acc : acc, 0);
          this.countCompletedGoals = this.morningData.goals.reduce((acc, cur) => cur.completed === true ? ++acc : acc, 0);
          this.progress = ((this.countCompletedGoals + this.countCompletedTasks) / (this.totalGoals + this.totalTasks)) * 100;
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

}
