export interface Recipe {
    name: string;
    description: string;
    ingredients: { name: string; }[];
    imageUrl: string;
  }