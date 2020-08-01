import {Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)];
  ingredientClicked = new Subject<number>();

  constructor() {
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredientBasedOnIndex(indexOfIngredient: number) {
    return this.ingredients[indexOfIngredient];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(ingredients);
  }

  editIngredient(ingredient: Ingredient, indexOfIngredient: number) {
    this.ingredients[indexOfIngredient] = ingredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
