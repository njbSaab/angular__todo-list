import { Task } from "src/app/model/Task";
import {CammonDAO} from "./CammonDAO";
import {Category} from "../../../model/Category";
import {Priority} from "../../../model/Priority";
import {Observable} from "rxjs";

export interface TaskDAO extends CammonDAO<Task>{

  //поиск задач по всем параметрам если парамент - нул он не будет учитыватся
  search(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>

  //кол-во незаврешнных задач в категории
  getCompletedCountInCategory(category: Category): Observable<number>

  //кол-во незаврш задач в заданной категории
  getUncompletedCountInCategory(category: Category): Observable<number>

  //кол-во всех задач в заданной категории
  getTotalCountInCategory(category: Category): Observable<number>

  //кол-во всех задач в общем
  getTotalCount(): Observable<number>

}
