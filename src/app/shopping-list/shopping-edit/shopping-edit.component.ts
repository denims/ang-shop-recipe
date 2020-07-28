import {Component, OnInit} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  addIngredients(shoppingComponent: NgForm): void {
    this.shoppingListService.addIngredient(
      new Ingredient(shoppingComponent.value.nameInput,
        shoppingComponent.value.amountInput));
    shoppingComponent.resetForm();
  }

}
