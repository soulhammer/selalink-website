import { ingredients } from './index.ts';
export const fruitIngredients = ingredients.filter(item => item.category === 'fruit');
