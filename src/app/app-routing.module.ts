import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{

//create 3 routes
  path: 'movie',
  component: MovieComponent
}, {
  path: 'movie/create',
  component: MovieCreateComponent
}, {
  path: 'movie/edit/:id',
  component: MovieEditComponent
}, {
  path: '**',
  redirectTo: 'movie'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
