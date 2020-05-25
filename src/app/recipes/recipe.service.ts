import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();
  private recipe: Recipe[] =
  [new Recipe('Test Recipe', 'Test desc', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
  [new Ingredient('Ingredient 1', 10), new Ingredient('Ingredient 2', 2)]),
  new Recipe('Test Recipe 2', 'Test desc 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
  [new Ingredient('Ingredient 3', 8), new Ingredient('Ingredient 4', 5)])];

  constructor() { }

  getRecipe() {
    return this.recipe.slice();
  }

  getRecipeById(id: number) {
    return this.recipe[id];
  }

}
