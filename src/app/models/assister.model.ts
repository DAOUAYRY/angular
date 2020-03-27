import { Prix } from './prix.model';
import { Seance } from './seance.model';
import { Spectateur } from './spectateur.model';

export class Assister {
    id: number;
    prix: Prix;
    seance: Seance;
    spectateur: Spectateur;
}