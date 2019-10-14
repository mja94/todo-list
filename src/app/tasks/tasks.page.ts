import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-tasks',
  templateUrl: 'tasks.page.html',
  styleUrls: ['tasks.page.scss']
})
export class TasksPage {
  todo: any;
  user: string;

  constructor() {
    //this.user = firebase.auth().currentUser.uid;
    //console.log('userID', this.user);
    this.getData();
  }

  getData() {
    this.todo = firebase.firestore().collection('todo').where('owner', '==', 'o3zeTfQjlSephIBEVZxlYFx1G6l1').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.todo = doc.data().morning;
        console.log('todo', this.todo);
      });
    })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }
}
