import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlerteValidationCandidaturesComponent } from './components/alerte-validation-candidatures/alerte-validation-candidatures.component';
import { AlertHomeComponent } from './components/alert-home/alert-home.component';

const routes: Routes = [
  {
    path: 'candidatures',
    component: AlerteValidationCandidaturesComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    component: AlertHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
