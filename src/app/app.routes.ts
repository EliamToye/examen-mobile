import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipePageComponent } from './recipe-page/recipe-page.component';

export const routes: Routes = [
  { path: '', component: AppComponent,pathMatch: 'full' }, // Dit is de lijstpagina
  { path: 'recipe/:id', component: RecipePageComponent },
];