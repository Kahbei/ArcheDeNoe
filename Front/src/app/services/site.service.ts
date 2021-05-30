import { Injectable } from '@angular/core';
import TABLES_ADN from '../template/_data';

@Injectable({
  providedIn: 'root',
})
export class SiteService {
  constructor() {}

  getAllSites() {
    return TABLES_ADN.SITE_STOCKAGE;
  }
}
