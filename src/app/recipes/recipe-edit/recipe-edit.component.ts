import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {RecipeService} from '../recipe.service';
import {Recipe} from '../recipe.model';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.id = params.id;
        this.editMode = !params.id;
      }
    );

    this.recipeForm = new FormGroup({
      recipeName: new FormControl(null),
      recipeImagePath: new FormControl(null),
      recipeDescription: new FormControl(null),
      ingredients: new FormArray([
        new FormGroup({
          name: new FormControl(null),
          amount: new FormControl(null)
        })
      ])
    });
  }

  getIngredient() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  getControlFromFormGroup(formGroup: any, requiredValue: string): FormControl {
    return formGroup.get(requiredValue) as FormControl;
  }

  onSubmit() {
    const ingredients: Ingredient[] = (this.recipeForm.get('ingredients') as FormArray).value.map(
      ingredient => new Ingredient(ingredient.name, ingredient.amount)
    );
    const recipe = new Recipe(this.recipeForm.get('recipeName').value,
      this.recipeForm.get('recipeDescription').value,
      this.recipeForm.get('recipeImagePath').value,
      ingredients
    );
    this.recipeService.addRecipe(recipe);
    this.recipeForm.reset();
  }
}
