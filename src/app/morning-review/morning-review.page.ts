import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-morning-review',
  templateUrl: './morning-review.page.html',
  styleUrls: ['./morning-review.page.scss'],
})
export class MorningReviewPage implements OnInit {
  inputTask: string;
  inputGoal: string;
  focusInput: any;
  taskList = [];
  goalList = [];
  gratefulList = [];
  affirmation: string;
  isDisabledAffirmation: boolean;
  isDisabledGoal: boolean;
  isDisabledGrateful: boolean;
  isDisabledTask: boolean;

  constructor(public navCtrl: NavController, public alertController: AlertController) { }

  ngOnInit() {
    this.isDisabledAffirmation = false;
    this.isDisabledGoal = true;
    this.isDisabledGrateful = true;
    this.isDisabledTask = true;
  }


  addItem() {
    if (this.focusInput !== undefined) {
      const item = this.focusInput.value;
      if (item.length && item.trim() !== '') {
        if (this.focusInput.name === 'task') {
          this.taskList.push(item);
        }
        if (this.focusInput.name === 'goal') {
          this.goalList.push(item);
        }
        if (this.focusInput.name === 'grateful') {
          this.gratefulList.push(item);
        }
        if (this.focusInput.name === 'affirmation') {
          this.affirmation = item;
        }
      }
      this.focusInput.value = '';
    }
  }

  deleteTask(index) {
    this.taskList.splice(index, 1);
  }

  deleteGoal(index) {
    this.goalList.splice(index, 1);
  }

  deleteGrateful(index) {
    this.gratefulList.splice(index, 1);
  }

  deleteAffirmation() {
    this.affirmation = undefined;
  }

  change(event) {
    this.focusInput = event.target;
    if (this.focusInput.name === 'task') {
      this.isDisabledAffirmation = true;
      this.isDisabledGoal = true;
      this.isDisabledGrateful = true;
      this.isDisabledTask = false;
    }
    if (this.focusInput.name === 'goal') {
      this.isDisabledAffirmation = true;
      this.isDisabledGoal = false;
      this.isDisabledGrateful = true;
      this.isDisabledTask = true;
    }
    if (this.focusInput.name === 'grateful') {
      this.isDisabledAffirmation = true;
      this.isDisabledGoal = true;
      this.isDisabledGrateful = false;
      this.isDisabledTask = true;
    }
    if (this.focusInput.name === 'affirmation') {
      this.isDisabledAffirmation = false;
      this.isDisabledGoal = true;
      this.isDisabledGrateful = true;
      this.isDisabledTask = true;
    }
  }

  async goBack() {
    const alert = await this.alertController.create({
      header: 'Warning!',
      message: 'Are you sure you want to quit without saving?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.navigateBack('dashboard');
          }
        },
        {
          text: 'No',
        }
      ]
    });

    await alert.present();
  }

  async validate() {
    if (this.taskList.length > 0 && this.goalList.length > 0 && this.affirmation !== '' && this.affirmation.length > 0) {
      const alert = await this.alertController.create({
        header: 'Success!',
        message: 'Everything has been saved',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              this.navCtrl.navigateBack('dashboard');
            }
          }
        ]
      });

      await alert.present();
    } else {
      const alert = await this.alertController.create({
        header: 'Warning!',
        message: 'Please make sure to fill everything up',
        buttons: [
          {
            text: 'Ok',
          }
        ]
      });
      await alert.present();
    }
  }
}



