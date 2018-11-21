import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private db:AngularFireDatabase) { }


  public createMovie(movie) {
    this.db.database.ref('movies/'+movie.id).set(movie);
    // this.db.database.ref('personas/').set(person);
}

public getMovies() {
    return this.db.list('movies').valueChanges();
    }

public deleteMovie() {
      return this.db.list('movies').remove();
      }

public updateMovie(movie){
        this.db.database.ref('movie/'+movie.id).set(movie);
    }


}