import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/about/components/about/about.component').then(m => m.AboutComponent)
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
