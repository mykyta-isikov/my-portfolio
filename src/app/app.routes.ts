import { Routes } from '@angular/router';
import { AboutComponent } from './features/about/components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/components/blog/blog.component').then(m => m.BlogComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
