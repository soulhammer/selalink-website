import { ingredients } from './index.ts';
export const grainIngredients = ingredients.filter(item => item.category === 'grain');
