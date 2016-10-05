import { Routes } from '@angular/router';
import { MainPage } from '../pages/prototype/main/main';
import { ListPage } from '../pages/prototype/list/list';

export const routes: Routes = [
  {
    path: '',
    // component: HomePage
    component: MainPage
  },
  {
    path: 'list',
    // redirectTo: '/'
    component: ListPage
  }
];
