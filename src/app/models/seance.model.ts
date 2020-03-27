import { Film } from './film.model';
import { Assister} from './assister.model';
import { Prix } from './prix.model';
import { Salle } from './salle.model';

export class Seance {
    id: number;
    date: Date;
    assister: Array<Assister>;
    prix: Array<Prix>;
    film: Film;
    sall: Salle;
}