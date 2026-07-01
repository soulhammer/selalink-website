import type { Ingredient } from '../ingredients';
import data from './seafood.json' with { type: 'json' };
export const seafoodIngredients = data as Ingredient[];
