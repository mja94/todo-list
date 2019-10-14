import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyB0F9DCV7AJM5qlMKxsfkRBfhAXiIVpEaU',
  authDomain: 'todoapp-ff5c2.firebaseapp.com',
  databaseURL: 'https://todoapp-ff5c2.firebaseio.com',
  projectId: 'todoapp-ff5c2',
  storageBucket: 'todoapp-ff5c2.appspot.com',
  messagingSenderId: '859606420504',
  appId: '1:859606420504:web:8c56bcd0704efde41b476d',
  measurementId: 'G-8WBRPWWFMY'
});

firebase.firestore().settings({
  timestampsInSnapshots: true
});

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
