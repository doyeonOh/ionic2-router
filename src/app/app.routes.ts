import { Routes } from '@angular/router';
import { MainPage } from '../pages/prototype/main/main';
import { HomePage } from '../pages/home/home';

export const routes: Routes = [
  {
    path: '',
    // component: HomePage
    component: MainPage
  },
  {
    path: 'main',
    // redirectTo: '/'
    component: HomePage
  }
];
