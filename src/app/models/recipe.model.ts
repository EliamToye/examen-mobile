export interface Recipe {
    name: string;
    description: string;
    ingredients: { name: string; quantity: string }[];
    imageUrl: string;
  }