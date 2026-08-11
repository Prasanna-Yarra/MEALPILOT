import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { AuthCallback } from './pages/auth-callback/auth-callback';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: Dashboard },
  { path: 'auth/callback', component: AuthCallback },
  { path: '**', redirectTo: '' }
];
