import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataHandlerService } from "../../service/data-handler.service";
import { Category } from "../../model/Category";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  @Input()
  categories: Category[];

  @Output()
  selectCategory = new EventEmitter<Category>();

  selectedCategory: Category | undefined;

  constructor(private dataHandler: DataHandlerService) {
  this.categories = []
  }

  ngOnInit(): void {
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    if (this.selectedCategory === category) {
      return;
    }
    this.selectedCategory = category;
    this.selectCategory.emit(this.selectedCategory);
  }

}
