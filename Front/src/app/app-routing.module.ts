import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlerteValidationCandidaturesComponent } from './components/alerte-validation-candidatures/alerte-validation-candidatures.component';
import { AlertHomeComponent } from './components/alert-home/alert-home.component';
import { CandidatureMotivationComponent } from './components/candidature-motivation/candidature-motivation.component';
import { LotsComponent } from './components/lots/lots.component';
import { LotsDetailsComponent } from './components/lots-details/lots-details.component';
import { PersonnelsComponent } from './components/personnels/personnels.component';
import { SitesComponent } from './components/sites/sites.component';
import { TaxonomieComponent } from './components/taxonomie/taxonomie.component';
import { TaxonomieDetailsComponent } from './components/taxonomie-details/taxonomie-details.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: AlertHomeComponent,
  },
  {
    path: 'candidature/list',
    component: AlerteValidationCandidaturesComponent,
  },
  {
    path: 'candidature',
    component: CandidatureMotivationComponent,
  },
  {
    path: 'lots',
    component: LotsComponent,
  },
  {
    path: 'lots/details',
    component: LotsDetailsComponent,
  },
  {
    path: 'personnels',
    component: PersonnelsComponent,
  },
  {
    path: 'sites',
    component: SitesComponent,
  },
  {
    path: 'taxonomie',
    component: TaxonomieComponent,
  },
  {
    path: 'taxonomie/details',
    component: TaxonomieDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
