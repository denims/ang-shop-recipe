import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import {ActivatedRoute, Params} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private shoppingListService: ShoppingListService,
              private activatedRoute: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => this.selectedRecipe = this.recipeService.getRecipeById(params.id)
    );
  }

  onAddIngredientsToShoppingList() {
    this.shoppingListService.addIngredients(this.selectedRecipe.ingredients);
  }

}
