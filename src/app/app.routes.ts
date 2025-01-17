import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Dit is de lijstpagina
  { path: 'recipe/:id', component: RecipeDetailComponent }, // Detailpagina
];