import type { Ingredient } from '../ingredients';
import data from './condiment.json' with { type: 'json' };
export const condimentIngredients = data as Ingredient[];
