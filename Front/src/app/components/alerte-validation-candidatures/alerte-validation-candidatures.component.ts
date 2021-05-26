import { Component, OnInit } from '@angular/core';
import candidaturesList from './candidatures.js';
import projetsList from './projets.js';

@Component({
  selector: 'app-alerte-validation-candidatures',
  templateUrl: './alerte-validation-candidatures.component.html',
  styleUrls: ['./alerte-validation-candidatures.component.css']
})

export class AlerteValidationCandidaturesComponent implements OnInit {
  candidaturesList: Object = candidaturesList;

  projetsList: Object = projetsList;

  alerte: string = "Jungle";

  afficheText: string = "Afficher le texte";
  cacheText: string = "Cacher le texte";
  elementText: string;

  setSaving(element){
    this.elementText = element.textContent.toString().trim();
    if (this.elementText == this.afficheText) {
      element.textContent = this.cacheText
    } else if (this.elementText == this.cacheText) {
      element.textContent = this.afficheText
    } else {
      console.log("erreur, impossible de reconnaitre la chaine")
      element.textContent = this.afficheText
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
