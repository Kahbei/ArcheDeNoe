import { Component, OnInit } from '@angular/core';
import { EspeceService } from 'src/app/services/espece.service';
// import ESPECE from '../../template/espece.js';
@Component({
  selector: 'app-taxonomie',
  templateUrl: './taxonomie.component.html',
  styleUrls: ['./taxonomie.component.css'],
})
export class TaxonomieComponent implements OnInit {
  taxonomyLists: any;
  taxonomyKeys: any;

  searchText: any = '';

  constructor(private service: EspeceService) {}

  getTaxonomyLists() {
    this.taxonomyLists = this.service.getAllTaxonomy();
    this.taxonomyKeys = Object.keys(this.taxonomyLists[0]);
  }

  addNewSpecimen(...args) {
    console.log(`img : ${args}`);
  }

  ngOnInit(): void {
    this.getTaxonomyLists();
  }
}
