import { Component, OnInit } from '@angular/core';
import alertLists from '../../template/alert.js';

@Component({
  selector: 'app-alert-home',
  templateUrl: './alert-home.component.html',
  styleUrls: ['./alert-home.component.css'],
})
export class AlertHomeComponent implements OnInit {
  alertLists: Object = alertLists;
  searchText: any = '';

  constructor() {}

  addNewAlert(
    img: HTMLInputElement,
    title: HTMLInputElement,
    description: HTMLInputElement
  ) {
    console.log(
      `img : ${img.value} title : ${title.value} desc : ${description.value}`
    );
  }

  ngOnInit(): void {}
}
