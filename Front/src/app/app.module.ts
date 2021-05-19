import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertHomeComponent } from './components/alert-home/alert-home.component';
import { AlerteValidationCandidaturesComponent } from './components/alerte-validation-candidatures/alerte-validation-candidatures.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AlertHomeComponent,
    AlerteValidationCandidaturesComponent,
    SearchFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
