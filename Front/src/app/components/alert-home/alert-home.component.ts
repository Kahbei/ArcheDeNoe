import { Component, OnInit } from '@angular/core';
import alertLists from './alert.js';

@Component({
  selector: 'app-alert-home',
  templateUrl: './alert-home.component.html',
  styleUrls: ['./alert-home.component.css'],
})
export class AlertHomeComponent implements OnInit {
  alertLists: Object = alertLists;

  constructor() {}

  ngOnInit(): void {}
}
