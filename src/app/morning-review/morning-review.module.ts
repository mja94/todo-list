import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MorningReviewPage } from './morning-review.page';
import { HeaderComponent } from '../components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: MorningReviewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MorningReviewPage, HeaderComponent]
})
export class MorningReviewPageModule {}
