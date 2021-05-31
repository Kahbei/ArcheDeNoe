import { Component, OnInit } from '@angular/core';
import { PersonnelService } from 'src/app/services/personnel.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css'],
})
export class PersonnelsComponent implements OnInit {
  personnelLists: any;
  personnelKeys: any;
  searchText: any = '';

  constructor(private service: PersonnelService) {}

  getPersonnelList() {
    this.personnelLists = this.service.getAllPersonnels();
    this.personnelKeys = Object.keys(this.personnelLists[0]);
  }

  ngOnInit(): void {
    this.getPersonnelList();
  }
}
