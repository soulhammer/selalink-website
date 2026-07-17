import { ingredients } from '../ingredients.ts';
export const fruitIngredients = ingredients.filter(item => item.category === 'fruit');
