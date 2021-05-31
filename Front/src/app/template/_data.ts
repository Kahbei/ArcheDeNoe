import ACTEUR from 'src/app/template/acteur.js';
import ALERT from 'src/app/template/alert.js';
import CANDIDATURE from 'src/app/template/candidatures.js';
import CUVE from 'src/app/template/cuve.js';
import ESPECE from 'src/app/template/espece.js';
import LOT from 'src/app/template/lot.js';
import PERSONNEL from 'src/app/template/personnel.js';
import PROJET from 'src/app/template/projets.js';
import SERVEUR from 'src/app/template/serveur.js';
import SITE_STOCKAGE from 'src/app/template/siteStockage';
import TACHE_PROJET from 'src/app/template/tacheProjet.js';
import TRACABILITE from 'src/app/template/tracabilite.js';
import UTILISATEUR from 'src/app/template/utilisateur.js';

const TABLES_ADN = {
  ACTEUR: ACTEUR,
  ALERT: ALERT,
  CANDIDATURE: CANDIDATURE,
  CUVE: CUVE,
  ESPECE: ESPECE,
  LOT: LOT,
  PERSONNEL: PERSONNEL,
  PROJET: PROJET,
  SERVEUR: SERVEUR,
  SITE_STOCKAGE: SITE_STOCKAGE,
  TACHE_PROJET: TACHE_PROJET,
  TRACABILITE: TRACABILITE,
  UTILISATEUR: UTILISATEUR,
};

TABLES_ADN.ACTEUR.map((e) => {
  e.id_candidature = TABLES_ADN.CANDIDATURE.find(
    (f) => f.id_candidature === e.id_candidature
  );
});

TABLES_ADN.ALERT.map((e) => {
  e.id_espece = TABLES_ADN.ESPECE.find((f) => f.id_espece === e.id_espece);
});

TABLES_ADN.CANDIDATURE.map((e) => {
  e.id_utilisateur = TABLES_ADN.UTILISATEUR.find(
    (f) => f.id_utilisateur === e.id_utilisateur
  );
});

TABLES_ADN.CUVE.map((e) => {
  e.id_site = TABLES_ADN.SITE_STOCKAGE.find((f) => f.id_site === e.id_site);
});

TABLES_ADN.LOT.map((e) => {
  e.id_espece = TABLES_ADN.ESPECE.find((f) => f.id_espece === e.id_espece);
  e.id_cuve = TABLES_ADN.CUVE.find((f) => f.id_cuve === e.id_cuve);
});

TABLES_ADN.PERSONNEL.map((e) => {
  e.id_site = TABLES_ADN.SITE_STOCKAGE.find((f) => f.id_site === e.id_site);
});

TABLES_ADN.SERVEUR.map((e) => {
  e.id_site = TABLES_ADN.SITE_STOCKAGE.find((f) => f.id_site === e.id_site);
});

TABLES_ADN.TACHE_PROJET.map((e) => {
  e.id_alerte = TABLES_ADN.ALERT.find((f) => f.id_alerte === e.id_alerte);
});

TABLES_ADN.TRACABILITE.map((e) => {
  e.id_lot = TABLES_ADN.LOT.find((f) => f.id_lot === e.id_lot);
});

TABLES_ADN.UTILISATEUR.map((e) => {
  e.id_personnel = TABLES_ADN.PERSONNEL.find(
    (f) => f.id_personnel === e.id_personnel
  );
});

export default TABLES_ADN;
