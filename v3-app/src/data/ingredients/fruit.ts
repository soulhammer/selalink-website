import { ingredients } from '../ingredients';
export const fruitIngredients = ingredients.filter(item => item.category === 'fruit');
