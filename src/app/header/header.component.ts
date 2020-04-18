import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  clickedOnRecipe() {
    this.recipeClicked.emit(true);
  }

  clickedOnShoppingList() {
    this.recipeClicked.emit(false);
  }
}
