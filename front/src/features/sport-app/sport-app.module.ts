import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportAppComponent } from './sport-app.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SportAppComponent,
  },
];

@NgModule({
  declarations: [
    SportAppComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class SportAppModule { }
