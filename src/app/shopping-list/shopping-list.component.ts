import {Component, OnDestroy, OnInit} from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  ingredientSubscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientSubscription = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredientChanged: Ingredient[]) => this.ingredients = ingredientChanged
    );
  }

  ngOnDestroy(): void {
    this.ingredientSubscription.unsubscribe();
  }

  onIngredientClicked(ingredientIndex: number) {
    this.shoppingListService.ingredientClicked.next(ingredientIndex);
  }
}
