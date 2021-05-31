import ACTEUR from 'src/app/template/acteur.js';
import ALERT from 'src/app/template/alert.js';
import CUVE from 'src/app/template/cuve.js';
import ESPECE from 'src/app/template/espece.js';
import LOT from 'src/app/template/lot.js';
import PERSONNEL from 'src/app/template/personnel.js';
import SERVEUR from 'src/app/template/serveur.js';
import SITE_STOCKAGE from 'src/app/template/siteStockage';
import TACHE_PROJET from 'src/app/template/tacheProjet.js';
import TRACABILITE from 'src/app/template/tracabilite.js';
import UTILISATEUR from 'src/app/template/utilisateur.js';

const TABLES_ADN = {
  ACTEUR: ACTEUR,
  ALERT: ALERT,
  CUVE: CUVE,
  ESPECE: ESPECE,
  LOT: LOT,
  PERSONNEL: PERSONNEL,
  SERVEUR: SERVEUR,
  SITE_STOCKAGE: SITE_STOCKAGE,
  TACHE_PROJET: TACHE_PROJET,
  TRACABILITE: TRACABILITE,
  UTILISATEUR: UTILISATEUR,
};

// TABLES_ADN.ACTEUR.map((e) => {
//   e.id_candidature = TABLES_ADN.CANDITATURE.find((f) => f.id_candidature === e.id_candidature);
// });

TABLES_ADN.ALERT.map((e) => {
  e.id_espece = TABLES_ADN.ESPECE.find((f) => f.id_espece === e.id_espece);
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

// TABLES_ADN.TACHE_PROJET.map((e) => {
//   e.id_projet = TABLES_ADN.PROJET.find((f) => f.id_projet === e.id_projet);
// });

TABLES_ADN.TRACABILITE.map((e) => {
  e.id_lot = TABLES_ADN.LOT.find((f) => f.id_lot === e.id_lot);
});

TABLES_ADN.UTILISATEUR.map((e) => {
  e.id_personnel = TABLES_ADN.PERSONNEL.find(
    (f) => f.id_personnel === e.id_personnel
  );
});

export default TABLES_ADN;
