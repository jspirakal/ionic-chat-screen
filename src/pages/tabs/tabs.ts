import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
// import { HomePage } from '../home/home';
import { IonreditsPage } from '../ionredits/ionredits';
import { SettingsPage } from '../controls/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = IonreditsPage;
  tab2Root = SettingsPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
