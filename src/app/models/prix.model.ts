import { Assister} from './assister.model';
import { Seance } from './seance.model';
import { Cinema } from './cinema.model';

export class Prix {
    int: number;
    actif: any;
    cout: number;
    description: string;
    assisters: Array<Assister>;
    cinema: Cinema;
    seances: Array<Seance>;

}