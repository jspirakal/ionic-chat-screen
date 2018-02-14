import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
// import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonreditsPage } from '../pages/ionredits/ionredits';
import {SettingsPage} from '../pages/controls/settings';
import { OrderProvider } from '../providers/order/order';
import { HttpModule } from '@angular/http';
import { PhotosPage } from '../pages/photos/photos';
import {CommentPage} from '../pages/comment/comment';
@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    PhotosPage,
    CommentPage,
    TabsPage,
    SettingsPage,
    IonreditsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // AboutPage,
    CommentPage,
    ContactPage,
    // HomePage,
    PhotosPage,
    TabsPage,
    SettingsPage,
    IonreditsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OrderProvider
  ]
})
export class AppModule {}
