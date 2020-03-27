import { Salle } from './salle.model';
import { Prix } from './prix.model';

export class Cinema {

    id: number;
    adresse: string;
    prixs: Array<Prix>;
    salles: Array<Salle>
}