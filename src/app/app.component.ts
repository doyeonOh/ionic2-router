import { Component, AfterViewInit } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { MainPage } from '../pages/prototype/main/main';


@Component({
  template: `<router-outlet></router-outlet>`
})
export class MyApp implements AfterViewInit {

  constructor(private _platform: Platform) {
    this._platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  ngAfterViewInit() {
    this._platform.ready().then(() => {
    //   Deeplinks.route({
    //     '': MainPage,
    //     '/main': HomePage
    //   }).subscribe(
    //     (match) => {
    //       console.log('success!', match);
    //     },
    //     (nomatch) => {
    //       console.log(nomatch);
    //       console.warn('Unmatched Route', nomatch);
    //     }
    //   );
    });
  }
}
