import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Film } from '../models/film.model';

@Injectable()
export class FilmService {
    private subject: BehaviorSubject<Array<Film>>;
    public observable: Observable<any>;

    constructor() {
        this.subject = new BehaviorSubject([]);
        this.observable = this.subject.asObservable();
    }

    getAllFilms = () => {
        let url = '';
        fetch(url)
        .then(resp => resp.json(), reject => console.log(reject))
        .then(film => Object.assign(new Film(), film))
        .then(film => this.subject.next(film));
    }
}