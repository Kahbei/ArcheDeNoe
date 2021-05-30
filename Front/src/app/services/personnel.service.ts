import { Injectable } from '@angular/core';
import TABLES_ADN from '../template/_data';

@Injectable({
  providedIn: 'root',
})
export class PersonnelService {
  constructor() {}

  getAllPersonnels() {
    return TABLES_ADN.PERSONNEL;
  }
}
