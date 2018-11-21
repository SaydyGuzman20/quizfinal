import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { HomeComponent } from './home/home.component';
import {MoviesService} from './services/movies.service';


import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { from } from 'rxjs';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'movies', component: PeliculasComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

    AngularFireModule.initializeApp(environment.Firebase),//importado de enviroment.ts
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
