import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
 selector: 'app-movie-edit',
 templateUrl: './movie-edit.component.html',
 styleUrls: ['./movie-edit.component.scss']
})
export class MovieEditComponent implements OnInit {

 movie$: Observable<Movie>;
 movieDocument: AngularFirestoreDocument<Movie>;
 movieCollection: AngularFirestoreCollection<Movie>;

 constructor( //native Angular service
   private db: AngularFirestore,
   private route: ActivatedRoute, // will detect changes of parameter
   private router: Router
 ) { }

 ngOnInit() {
   this.route.params.subscribe(params => {
     this.movieDocument = this.db.doc<Movie>('movies/' + params.id); //doc = single, collection = list
     this.movie$ = this.movieDocument.valueChanges();
   });
 }

 updateMovie(movie) {
   this.movieDocument.update(movie).then(() => {
     this.router.navigate(['/movie']);
   });
 }

}
