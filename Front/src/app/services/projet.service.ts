import { Injectable } from '@angular/core';
import TABLES_ADN from '../template/_data';

@Injectable({
  providedIn: 'root',
})
export class ProjetService {
  constructor() {}

  getAllProjets() {
    return TABLES_ADN.PROJET;
  }
}
