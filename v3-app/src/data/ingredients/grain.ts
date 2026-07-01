import type { Ingredient } from '../ingredients';
import data from './grain.json' with { type: 'json' };
export const grainIngredients = data as Ingredient[];
