import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private db:AngularFireDatabase) { }


public getMovies() {        
    return this.db.list('movie').valueChanges();
}

public getMovie(id){
    return this.db.object('movie/'+id);
}

public createMovie(movie){
    this.db.database.ref('movie/'+movie.id).set(movie);
}

public updateMovie(movie){
    this.db.database.ref('movie/'+movie.id).set(movie);
}

public deleteMovie(id){
    this.db.object('movie/'+id).remove();
}
}
