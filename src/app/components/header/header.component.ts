import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() affirmation: string;
  showHeader: boolean;
  constructor() {
    if (this.affirmation) {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }
}
