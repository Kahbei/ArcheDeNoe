import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import TABLES_ADN from 'src/app/template/_data';

@Injectable({
  providedIn: 'root',
})
export class AlerteService {
  constructor(private http: HttpClient) {}

  //success
  //data

  getAllAlert() {
    return TABLES_ADN.ALERT;
  }
}
