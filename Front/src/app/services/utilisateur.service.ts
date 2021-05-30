import { Injectable } from '@angular/core';
import TABLES_ADN from '../template/_data';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  constructor() {}

  getAllUsers() {
    return TABLES_ADN.UTILISATEUR;
  }
}
