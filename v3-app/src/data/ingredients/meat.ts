import type { Ingredient } from '../ingredients';
import data from './meat.json' with { type: 'json' };
export const meatIngredients = data as Ingredient[];
