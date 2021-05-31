import { Component, OnInit } from '@angular/core';
import { LotService } from 'src/app/services/lot.service';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: ['./lots.component.css'],
})
export class LotsComponent implements OnInit {
  lotLists: any;
  lotKeys: any;
  searchText: any = '';

  constructor(private service: LotService) {}

  getLotAll() {
    this.lotLists = this.service.getAllLots();
    this.lotKeys = Object.keys(this.lotLists[0]);
  }

  ngOnInit(): void {
    this.getLotAll();
  }
}
