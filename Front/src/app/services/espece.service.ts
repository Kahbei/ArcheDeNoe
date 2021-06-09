import { Injectable } from '@angular/core';
import TABLES_ADN from 'src/app/template/_data';

@Injectable({
  providedIn: 'root',
})
export class EspeceService {
  constructor() {}

  getAllTaxonomy() {
    return TABLES_ADN.ESPECE;
  }
}
