import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('id');
    // Hier kun je de recepten ophalen op basis van het id
    // Voor nu gebruiken we een voorbeeldlijst, maar dit kan uit een service komen
    const recipes: Recipe[] = [
      {
        name: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish.',
        ingredients: [
          { name: 'Spaghetti', quantity: '200g' },
          { name: 'Ground Beef', quantity: '300g' },
          { name: 'Tomato Sauce', quantity: '1 cup' },
        ],
        imageUrl: 'assets/spaghetti.jpg',
      },
      {
        name: 'Caesar Salad',
        description: 'A fresh salad with Caesar dressing.',
        ingredients: [
          { name: 'Lettuce', quantity: '1 head' },
          { name: 'Croutons', quantity: '1 cup' },
          { name: 'Caesar Dressing', quantity: '1/2 cup' },
        ],
        imageUrl: 'assets/caesar-salad.jpg',
      },
    ];
    // Zoek het recept op basis van het id
    this.recipe = recipes[+recipeId!];  // Gebruik de index als id
  }
}