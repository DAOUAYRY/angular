import { Assister } from './assister.model';

export class Spectateur {
    id: number;
    nom: string;
    premium: any;
    prenom: string;
    assisters: Array<Assister>;
}