import { ingredients } from '../ingredients';
export const grainIngredients = ingredients.filter(item => item.category === 'grain');
