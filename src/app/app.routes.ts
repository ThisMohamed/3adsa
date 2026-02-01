import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Blog } from './blog/blog';
import { Whous } from './whous/whous';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'blog', component: Blog },
  { path: 'whous', component: Whous },
  { path: 'privacy', loadComponent: () => import('./privacy/privacy').then((c) => c.Privacy) },
  { path: 'terms', loadComponent: () => import('./terms/terms').then((c) => c.Terms) },
  { path: '**', loadComponent: () => import('./error/error').then((c) => c.Error) }
];
