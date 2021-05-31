import { Component, OnInit } from '@angular/core';
import { PersonnelService } from 'src/app/services/personnel.service';
import siteList from '../../template/siteStockage.js';
import { SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css'],
})
export class PersonnelsComponent implements OnInit {
  personnelLists: any;
  personnelKeys: any;
  searchText: any = '';

  siteList: Object = siteList;

  constructor(private service: PersonnelService) { }

  getPersonnelList() {
    this.personnelLists = this.service.getAllPersonnels();
    this.personnelKeys = Object.keys(this.personnelLists[0]);
  }

  updateMember(idMember) {
    var elem = document.getElementsByClassName("it" + idMember);
    console.log(elem)
    for (var i = 0; i < elem.length; i++) {
      if ((elem[i] as any).disabled == false) {
        (elem[i] as any).disabled = true
      } else {
        (elem[i] as any).disabled = false
      }
    }
  }

  ngOnInit(): void {
    this.getPersonnelList();
  }
}
