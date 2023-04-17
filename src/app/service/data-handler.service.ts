import { Injectable } from '@angular/core';
import {TaskDAOArray} from "../data/dao/impl/TaskDAOArray";
import {Observable} from "rxjs";
import {Task} from "../model/Task";
import {CategoryDAOArray} from "../data/dao/impl/CategoryDAOArray";
import {Category} from "../model/Category";
import {Priority} from "../model/Priority";

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  public taskDaoArray = new TaskDAOArray()
  public categoryDaoArray = new CategoryDAOArray()
  constructor() {
  }

  getAllTasks() : Observable<Task[]>{
    return this.taskDaoArray.getAll()
  }
  getAllCategories(): Observable<Category[]>{
    return this.categoryDaoArray.getAll()
  }
  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority | null): Observable<Task[]> {
    return this.taskDaoArray.search(category, searchText, status, priority !== null ? priority : null);
  }


}
