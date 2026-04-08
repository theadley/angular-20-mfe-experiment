import { Routes } from '@angular/router';
import {Home} from './components/home/home';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'home-lazy',
    loadComponent:
      () =>
        import('./components/home/home')
        .then(c => c.Home)
  }
];
