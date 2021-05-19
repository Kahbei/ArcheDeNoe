import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlerteValidationCandidaturesComponent } from './components/alerte-validation-candidatures/alerte-validation-candidatures.component';

const routes: Routes = [
  {
    path: 'alerte-validation-candidatures',
    component: AlerteValidationCandidaturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
