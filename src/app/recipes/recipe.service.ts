import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipe: Recipe[] =
  [new Recipe('Test Recipe', 'Test desc', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
  new Recipe('Test Recipe 2', 'Test desc 2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg')];
  selectedRecipe = new EventEmitter<Recipe>();

  constructor() { }

  getRecipe() {
    return this.recipe.slice();
  }

}
