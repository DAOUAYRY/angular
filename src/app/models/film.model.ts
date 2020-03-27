import { Information } from './information.model';
import { Seance } from './seance.model';

export class Film {
    id: number;
    duree: string;
    titre: string;
    titreOriginal: string;
    visa: string;
    information: Array<Information>;
    seance: Array<Seance>
  }
  