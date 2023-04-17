import { Task } from "src/app/model/Task";
import {TaskDAO} from "../interface/TaskDAO";
import {Observable, of, throwError} from "rxjs";
import {TestData} from "../../TestData";
import {Category} from "../../../model/Category";
import {Priority} from "../../../model/Priority";


export  class TaskDAOArray implements TaskDAO{
  add(T: any): Observable <Task> {
    return of();
  }

  deleted(id: number): Observable<Task> {
    return of();
  }

  get(id: number): Observable<Task>{
    const task = TestData.tasks.find(todo => todo.id === id);
    if (task) {
      return of(task);
    } else {
      return throwError(`Task with id ${id} not found`);
    }
  }

  getAll(): Observable<Task[]> {
    return of(TestData.tasks);
  }

  getCompletedCountInCategory(category: Category): Observable<number> {
    return of();
  }

  getTotalCount(): Observable<number> {
    return of();
  }

  getTotalCountInCategory(category: Category): Observable<number> {
    return of();
  }

  getUncompletedCountInCategory(category: Category): Observable<number> {
    return of();
  }

  search(category: Category, searchText: string, status: boolean, priority: Priority | null): Observable<Task[]> {
    return of(this.searchTodos(category, searchText, status, priority !== null ? priority : null));
  }
  private searchTodos(category: Category, searchText: string, status: boolean, priority: Priority | null):Task[]{
    let allTasks = TestData.tasks

    if(category != null){
      allTasks = allTasks.filter(todo => todo.category === category)
    }

    return allTasks
  }

  update(T: any): Observable<Task> {
    return of();
  }

}
