import { ingredients } from '../ingredients';
export const vegetableIngredients = ingredients.filter(item => item.category === 'vegetable');
