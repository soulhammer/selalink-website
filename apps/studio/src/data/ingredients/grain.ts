import { ingredients } from '../ingredients.ts';
export const grainIngredients = ingredients.filter(item => item.category === 'grain');
