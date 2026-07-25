import { ingredients } from './index.ts';
export const dairyIngredients = ingredients.filter(item => item.category === 'dairy');
