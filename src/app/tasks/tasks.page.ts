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
  affirmation: string;

  constructor() {
    this.user = firebase.auth().currentUser.uid;
    this.affirmation = '';
    this.getData();
  }

  getData() {
    this.todo = firebase.firestore().collection('todo')
      .where('owner', '==', this.user)
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.todo = doc.data().morning;
          this.affirmation = this.todo.affirmation;
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  }

  onCheckTasks(task: any) {
    const checked = task.completed;
    const db = firebase.firestore().collection('todo').doc(this.user);
    db.collection('tasks').add({ description: task.description, completed: !checked }).then(() => {
      console.log('added', checked, task);
    }).catch((error) => {
      console.log('Error updating documents: ', error);
    });
  }


}
