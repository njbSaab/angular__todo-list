import {Component, OnInit} from '@angular/core';
import {Task} from './model/Task';
import {DataHandlerService} from "./service/data-handler.service";
import {Category} from "./model/Category";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'todo-list_angular';
  tasks: Task[] = [];
  categories: Category[] = []
  selectedCategory: Category | null = null;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.tasks = tasks)
    this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories)

    this.onSelectCategory(null)
  }

  public onSelectCategory(category: Category | null): void {
    this.selectedCategory = category;

    if (this.selectedCategory !== null) {
      this.dataHandler.searchTasks(
        this.selectedCategory,
        '',
        false,
        null
      ).subscribe(tasks => {
        this.tasks = tasks;
      });
    }
  }
  public onUpdateTask(task :Task){
    console.log(task)
  }
}
