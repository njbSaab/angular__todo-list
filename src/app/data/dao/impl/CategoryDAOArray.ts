import {CategoryDAO} from "../interface/CategoryDAO";
import {Category} from "../../../model/Category";
import {Observable, of} from "rxjs";
import {TestData} from "../../TestData";


export  class CategoryDAOArray implements CategoryDAO{
  add(T:any): Observable<Category>{
    return of()
  }

  deleted(id: number): Observable<Category> {
    return of()
  }

  get(id: number): Observable<Category> {
    return of()
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  search(title: string): Observable<Category[]> {
    return of()
  }

  update(T:any): Observable<Category> {
    return of()
  }

}
