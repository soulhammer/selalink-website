import { ingredients } from '../ingredients.ts';
export const etcIngredients = ingredients.filter(item => item.category === 'etc');
