import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from 'src/app/shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('shoppingComponent') shoppingEditForm: NgForm;
  editMode = false;
  clickedIndex = -1;
  ingredientSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.ingredientSubscription = this.shoppingListService.ingredientClicked.subscribe(
      (ingredientIndex: number) => {
        this.editMode = true;
        this.clickedIndex = ingredientIndex;
        const ingredient = this.shoppingListService.getIngredientBasedOnIndex(ingredientIndex);
        this.shoppingEditForm.setValue({
          nameInput: ingredient.name,
          amountInput: ingredient.amount
        });
      }
    );
  }

  onSubmit(shoppingComponent: NgForm): void {
    if (this.editMode) {
      this.editMode = false;
      this.shoppingListService.editIngredient(new Ingredient(shoppingComponent.value.nameInput,
        shoppingComponent.value.amountInput), this.clickedIndex);
    } else {
      this.shoppingListService.addIngredient(
        new Ingredient(shoppingComponent.value.nameInput,
          shoppingComponent.value.amountInput));
    }
    shoppingComponent.resetForm();
  }

  ngOnDestroy(): void {
    this.ingredientSubscription.unsubscribe();
  }

  onClear() {
    this.editMode = false;
    this.shoppingEditForm.resetForm();
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingListService.deleteIngredient(this.clickedIndex);
      this.shoppingEditForm.resetForm();
    }
    this.editMode = false;
  }
}
