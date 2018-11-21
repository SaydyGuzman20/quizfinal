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
    this.textButton = (this.status == 'create') ? 'Crear imagen' : 'Actualizar imagen';
  }


validateStatusButton(){
    if (this.status == 'create') {
        this.createMovie();
    } else {
        this.updateMovie();
    }
}

  ngOnInit() {
  }
  createMovie() {
    this.movie.id = Date.now();
    this.movieService.createMovie(this.movie);
  }
  deleteMovie(){
    
    this.movieService.deleteMovie();
  }

  cancelMovie(){
    this.status = 'create';
    this.textButton = 'Crear imagen';
    this.movie = {};

}
getMovie(id){
      this.movieService.getMovies().subscribe(movie => {
      this.movies = this.movies;
      this.textButton = 'Actualizar imagen';
      this.status = id;
  });
}

  updateMovie(){
    this.movieService.updateMovie(this.movie);
    this.cancelMovie();

    
}
  
  cleanForm() {

    this.movie = {};

  }

}
