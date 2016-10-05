import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

import { MainPage } from '../pages/prototype/main/main';
import { ListPage } from '../pages/prototype/list/list';

@NgModule({
  declarations: [
    MyApp,
    // mine
    MainPage,
    ListPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(routes)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    ListPage
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ]
})
export class AppModule {}
