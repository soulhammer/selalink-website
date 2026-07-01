import { ingredients } from '../ingredients';
export const condimentIngredients = ingredients.filter(item => item.category === 'condiment');
