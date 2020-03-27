import { Film } from './models/film.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from './services/film.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public films: Array<Film> = [];
  private subscription: Subscription;

  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.subscription = this.filmService.observable.subscribe(data => {
      this.films = data;
      console.log('films', this.films);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  
  
}
