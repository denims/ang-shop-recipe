import {Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] =
    [new Recipe('Test Recipe', 'Test desc', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [new Ingredient('Ingredient 1', 10), new Ingredient('Ingredient 2', 2)]),
      new Recipe('Test Recipe 2', 'Test desc 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
        [new Ingredient('Ingredient 3', 8), new Ingredient('Ingredient 4', 5)])];
  recipeChanged = new Subject<Recipe[]>();
  constructor() {
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeById(id: number) {
    return this.recipes[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

}
