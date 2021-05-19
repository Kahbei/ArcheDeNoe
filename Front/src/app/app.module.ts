import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertHomeComponent } from './components/alert-home/alert-home.component';
import { AlerteValidationCandidaturesComponent } from './components/alerte-validation-candidatures/alerte-validation-candidatures.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { PersonnelsComponent } from './components/personnels/personnels.component';
import { LotsComponent } from './components/lots/lots.component';
import { LotsDetailsComponent } from './components/lots-details/lots-details.component';
import { SitesComponent } from './components/sites/sites.component';
import { TaxonomieComponent } from './components/taxonomie/taxonomie.component';
import { TaxonomieDetailsComponent } from './components/taxonomie-details/taxonomie-details.component';
import { CandidatureMotivationComponent } from './components/candidature-motivation/candidature-motivation.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertHomeComponent,
    AlerteValidationCandidaturesComponent,
    SearchFilterPipe,
    PersonnelsComponent,
    LotsComponent,
    LotsDetailsComponent,
    SitesComponent,
    TaxonomieComponent,
    TaxonomieDetailsComponent,
    CandidatureMotivationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
