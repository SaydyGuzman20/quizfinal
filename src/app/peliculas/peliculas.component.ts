import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  status:any = null;
  movies = null;
  movie: any = {};
  textButton:string = null;


  constructor(private movieService:MoviesService,private route:ActivatedRoute) { 
    this.movies = movieService.getMovies();
    this.status = this.route.snapshot.params['status'];
    this.textButton = (this.status == 'create') ? 'Crear pelicula' : 'Actualizar pelicula';
  }

  ngOnInit() {
  }
    validateStatusButton(){
      if (this.status == 'create') {
          this.createMovie();
      } else {
          this.updateMovie();
      }
  }

  getMovie(id){
      this.movieService.getMovie(id).valueChanges().subscribe(movie => {
          this.movie = movie;
          this.textButton = 'Actualizar pelicula';
          this.status = id;
      });
  }

  cancelMovie(){
      this.status = 'create';
      this.textButton = 'Crear pelicula';
      this.movie = {};
  }

  createMovie() {
      this.movie.id = Date.now();
      this.movieService.createMovie(this.movie);
      this.cancelMovie();
  }

  updateMovie(){
      this.movieService.updateMovie(this.movie);
      this.cancelMovie();
  }

  deleteMovie(id){
      this.movieService.deleteMovie(id);
  }
}
