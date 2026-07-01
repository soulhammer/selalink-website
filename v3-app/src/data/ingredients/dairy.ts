import { ingredients } from '../ingredients';
export const dairyIngredients = ingredients.filter(item => item.category === 'dairy');
