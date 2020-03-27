import { Cinema} from './cinema.model';
import { Seance } from './seance.model';

export class Salle {
    id: number;
    nom: string;
    place: number;
    cinema: Cinema;
    seances: Array<Seance>;
}