import { vegetableIngredients } from './ingredients/vegetable';
import { fruitIngredients } from './ingredients/fruit';
import { dairyIngredients } from './ingredients/dairy';
import { meatIngredients } from './ingredients/meat';
import { seafoodIngredients } from './ingredients/seafood';
import { grainIngredients } from './ingredients/grain';
import { condimentIngredients } from './ingredients/condiment';
import { etcIngredients } from './ingredients/etc';

export interface StorageGuide {
  durationDays: number;
  tips: Record<string, string>;
  sources?: string[];
}

export interface Ingredient {
  id: string;
  category: 'vegetable' | 'fruit' | 'dairy' | 'meat' | 'seafood' | 'grain' | 'condiment' | 'etc';
  emoji: string;
  names: Record<string, string>;
  isProcessed: boolean;
  iconImage?: string;
  searchKeywords?: Record<string, string[]>;
  storage: {
    room?: StorageGuide;
    fridge?: StorageGuide;
    freezer?: StorageGuide;
  };
}

export const ingredients: Ingredient[] = [
  ...vegetableIngredients,
  ...fruitIngredients,
  ...dairyIngredients,
  ...meatIngredients,
  ...seafoodIngredients,
  ...grainIngredients,
  ...condimentIngredients,
  ...etcIngredients
];
