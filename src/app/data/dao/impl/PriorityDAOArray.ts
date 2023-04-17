import {PriorityDAO} from "../interface/PriorityDAO";
import {Priority} from "../../../model/Priority";
import {Observable, of} from "rxjs";

export class PriorityDAOArray implements PriorityDAO{
  add(T:any): Observable <Priority> {
    return of();
  }

  deleted(id: number): Observable<Priority> {
    return of();
  }

  get(id: number): Observable<Priority> {
    return of();
  }

  getAll(): Observable<Priority[]> {
    return of();
  }

  update(T:any): Observable<Priority> {
    return of();
  }

}
