import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';


//firebase imports
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from "@angular/fire/firestore";

import { Validator } from './helpers/validation.helpers';

import { FivExpandableModule, FivRouterItemModule, FivCollapsableModule } from '@fivethree/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import {IonicGestureConfig} from 'src/ionic-gesture-config';

// Call the element loader after the platform has been bootstrapped

defineCustomElements(window);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    FivCollapsableModule,
    FivRouterItemModule,
    FivExpandableModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Validator,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DatePipe,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
