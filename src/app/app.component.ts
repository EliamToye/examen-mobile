import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Recipe } from './models/recipe.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
    RouterOutlet,
    MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  recipes: Recipe[] = [
    {
      name: 'Spaghetti Bolognese',
      description: 'A classic Italian pasta dish.',
      ingredients: [
        { name: 'Spaghetti', quantity: '200g' },
        { name: 'Ground Beef', quantity: '300g' },
        { name: 'Tomato Sauce', quantity: '1 cup' },
      ],
      imageUrl: 'https://dagelijksekost.vrt.be/_next/image?url=https%3A%2F%2Fcdn.dagelijksekost.tv%2Frecipes%2FPWRRtFi9tGsHgLQjVqwL%2Flandscape%2F1727274505431_1500x1125%3FGoogleAccessId%3Dfirebase-adminsdk-2hybg%2540dagelijkse-kost-prod.iam.gserviceaccount.com%26Expires%3D16725225600%26Signature%3DITgtzV8EJLFozeExk7z8UsOVp8HBD5AvkdrE%252FSm8bnZtgUHV%252BDwkWhcpoZachvuEMdLxEQHD9MbJhBpQ7mCVZmYQa5SfapK3I%252By3sYrmt925fuonPM3yHd3q6U0msdjNBP%252FeAn%252BDQ8YvkUoXkqVLEE6QDOwBKDtQ%252B2jkhyZD2zVkwJDJp7EILCShZKRXd9fuEhjBwTJBgwHSPnON7cnx%252BTJJ%252FKXrhF0EFyFqPmXqrxZpup1mUMgWFxMG69%252B8ZryeWFEK4XD31Tk0kr7RWF10jKIZuxAn3Rf%252BJ4zlszPg3O9H72cGxL%252BSrjT6QpvgzyhZ38WlIq5svo1kVt4ipt7noA%253D%253D&w=640&q=75',
    },
    {
      name: 'Steak tartaar met frietjes en sla',
      description: 'De legende van de tartaren brengt ons naadloos bij deze topklassieker uit de Belgische keuken. ',
      ingredients: [
        { name: 'Frieten', quantity: '1 hand' },
        { name: 'steak tartaar', quantity: '1 cup' },
        { name: 'sla', quantity: '1/2 hand' },
      ],
      imageUrl: 'https://cdn.dagelijksekost.tv/recipes/mgp4Pruv1E2pB8ZAIaAq/landscape/1727274320541_1500x1125?GoogleAccessId=firebase-adminsdk-2hybg%40dagelijkse-kost-prod.iam.gserviceaccount.com&Expires=16725225600&Signature=UGwToEcLxRriU2PMOYO%2B7QMXqms4VtCvK%2BjTWBE4vVIeuO1BoxTjKTEV9yFBIr29ijfLls6%2B6TIeb2%2B%2BsbSl0a1a%2FRBfYNkEueRtoD4wIuF%2BBYJXbCEFJvE1ckB1%2FDrYdN33zqhoS82ekLGtO5TDbIZBB2mKXB6%2Bb%2FVfEAMY4TIVHSoBBlboACniZfRkR5kZezC4QGtWh8mJPF29I%2B4E%2BXSqqTsQ91l9Nhyi%2Bayq80RvwE5%2FrgRghnyUeibnke5n7rliuW2dcoaJ7lxhxswSkleLIx9gmx2CY7ZBApexPqRLLGCdEy6ZHNUI0VaM9KvT8GA%2Fi764faZ7iP1LjEaJgg%3D%3D',
    },
    {
      name: 'Caesar Salad',
      description: 'A fresh salad with Caesar dressing.',
      ingredients: [
        { name: 'Lettuce', quantity: '1 head' },
        { name: 'Croutons', quantity: '1 cup' },
        { name: 'Caesar Dressing', quantity: '1/2 cup' },
      ],
      imageUrl: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/12/caesar-salad.jpg',
    },
  ];
}
