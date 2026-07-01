import { ingredients } from '../ingredients';
export const meatIngredients = ingredients.filter(item => item.category === 'meat');
