import { Component, OnInit } from '@angular/core';
import { CandidatureService } from 'src/app/services/candidature.service';
import { ProjetService } from 'src/app/services/projet.service';

@Component({
  selector: 'app-alerte-validation-candidatures',
  templateUrl: './alerte-validation-candidatures.component.html',
  styleUrls: ['./alerte-validation-candidatures.component.css'],
})
export class AlerteValidationCandidaturesComponent implements OnInit {
  candidaturesList: any;
  projetsList: any;

  alerte: string = 'Jungle';

  afficheText: string = 'Afficher le texte';
  cacheText: string = 'Cacher le texte';
  elementText: string;

  constructor(
    private serviceCandidat: CandidatureService,
    private serviceProjet: ProjetService
  ) {}

  getCandidatureList() {
    this.candidaturesList = this.serviceCandidat.getAllCanditatures();
  }

  getProjetList() {
    this.projetsList = this.serviceProjet.getAllProjets();
  }

  setSaving(element) {
    this.elementText = element.textContent.toString().trim();
    if (this.elementText == this.afficheText) {
      element.textContent = this.cacheText;
    } else if (this.elementText == this.cacheText) {
      element.textContent = this.afficheText;
    } else {
      console.log('erreur, impossible de reconnaitre la chaine');
      element.textContent = this.afficheText;
    }
  }

  accept(idUser) {
    let idProject;
    idProject = (<HTMLSelectElement>document.getElementById('s' + idUser))
      .value;
    if (idProject != 0) {
      console.log(idUser + ' - ' + idProject);
    } else {
      alert("Aucun projet n'a été choisi");
    }
  }

  refuse(idUser) {
    console.log(idUser);
    return idUser;
  }

  ngOnInit(): void {
    this.getCandidatureList();
    this.getProjetList();
  }
}
