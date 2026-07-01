import type { Ingredient } from '../ingredients';
import data from './etc.json' with { type: 'json' };
export const etcIngredients = data as Ingredient[];
