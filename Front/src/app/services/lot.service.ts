import { Injectable } from '@angular/core';
import TABLES_ADN from '../template/_data';

@Injectable({
  providedIn: 'root',
})
export class LotService {
  constructor() {}

  getAllLots() {
    return TABLES_ADN.LOT;
  }
}
