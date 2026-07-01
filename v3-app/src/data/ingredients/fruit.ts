import type { Ingredient } from '../ingredients';
import data from './fruit.json' with { type: 'json' };
export const fruitIngredients = data as Ingredient[];
