import { Component, OnInit, OnChanges } from '@angular/core';


@Component({
  selector: 'app-morning-review',
  templateUrl: './morning-review.page.html',
  styleUrls: ['./morning-review.page.scss'],
})
export class MorningReviewPage implements OnInit {
  inputTask: string;
  inputGoal: string;
  focusInput: any;
  constructor() { }
  taskList = [];
  goalList = [];
  gratefulList = [];
  affirmation = '';

  ngOnInit() {
  }


  addItem() {

    if (this.focusInput.value !== undefined) {
      const item = this.focusInput.value;
      console.log(this.focusInput.value);
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

  deleteItem() {
    console.log('delete item');
  }

  change(event) {
    console.log(event.target.name);
    this.focusInput = event.target;

  }

  changeModel(event) {
    console.log('Model change', event);
  }

}
