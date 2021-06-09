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

  nom: string = '';
  prenom: string = '';
  poste: string = '';
  email: string = '';

  constructor(private service: PersonnelService) { }

  getPersonnelList() {
    this.personnelLists = this.service.getAllPersonnels();
    this.personnelKeys = Object.keys(this.personnelLists[0]);
  }

  updateMember(idMember) {
    var elem = document.getElementsByClassName("it" + idMember);
    for (var i = 0; i < elem.length; i++) {
      if ((elem[i] as any).disabled == false) {
        (elem[i] as any).disabled = true
      } else {
        (elem[i] as any).disabled = false
      }
    }
  }

  deleteMember(idMember){
    console.log(idMember);
    var elem = document.getElementsByClassName("it" + idMember);
    for (var i = 0; i < elem.length; i++) {
      this.nom = (elem[1] as any).value;
      this.prenom = (elem[2] as any).value;
      this.poste = (elem[3] as any).value;
      this.email = (elem[4] as any).value;
    }
  }

  ngOnInit(): void {
    this.getPersonnelList();
  }
}
