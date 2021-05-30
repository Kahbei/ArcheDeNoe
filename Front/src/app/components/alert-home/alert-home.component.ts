import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { AlerteService } from 'src/app/services/alerte.service';
// import alertLists from '../../template/alert.js';

@Component({
  selector: 'app-alert-home',
  templateUrl: './alert-home.component.html',
  styleUrls: ['./alert-home.component.css'],
})
export class AlertHomeComponent implements OnInit {
  alertLists: any;
  searchText: any = '';

  constructor(private service: AlerteService) {}

  getAlertLists() {
    this.alertLists = this.service.getAllAlert();
  }

  addNewAlert(
    img: HTMLInputElement,
    title: HTMLInputElement,
    description: HTMLInputElement
  ) {
    console.log(
      `img : ${img.value} title : ${title.value} desc : ${description.value}`
    );
  }

  ngOnInit(): void {
    this.getAlertLists();
  }
}
