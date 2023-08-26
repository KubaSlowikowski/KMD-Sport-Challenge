import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authorizedCanActivateFn, unauthorizedCanActivateFn } from './store/user';
import { AuthCallbackComponent } from './auth-callback';
import { IntroComponent } from './intro';

const routes: Routes = [
  {
    path: 'auth-callback',
    component: AuthCallbackComponent,
  },
  {
    path: 'app',
    loadChildren: async () => (await import('../features/sport-app/sport-app.module')).SportAppModule,
    canActivate: [authorizedCanActivateFn],
  },
  {
    path: '',
    component: IntroComponent,
    canActivate: [unauthorizedCanActivateFn],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
