import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css'],
})
export class SitesComponent implements OnInit {
  siteStockageLists: any;

  constructor(private service: SiteService) {}

  getSiteLists() {
    this.siteStockageLists = this.service.getAllSites();
  }

  ngOnInit(): void {
    this.getSiteLists();
  }
}
