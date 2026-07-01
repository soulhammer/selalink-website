import type { Ingredient } from '../ingredients';
import data from './dairy.json' with { type: 'json' };
export const dairyIngredients = data as Ingredient[];
