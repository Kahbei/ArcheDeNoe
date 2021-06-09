import { Injectable } from '@angular/core';
import TABLES_ADN from '../template/_data';

@Injectable({
  providedIn: 'root',
})
export class CandidatureService {
  constructor() {}

  getAllCanditatures() {
    return TABLES_ADN.CANDIDATURE;
  }
}
