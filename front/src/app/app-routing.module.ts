import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  {
    path: 'auth-callback',
    component: AuthCallbackComponent,
  },
  {
    path: '',
    component: IntroComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
