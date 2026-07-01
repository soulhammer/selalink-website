import type { Ingredient } from '../ingredients';
import data from './vegetable.json' with { type: 'json' };
export const vegetableIngredients = data as Ingredient[];
