import {Observable} from "rxjs";

//все методы возвращают Observable - для ансик и работы в реактивном стиле
export interface CammonDAO<T>{

  //получить все знач
  add(T:any): Observable<T>;

  //получить 1-но значение по ид
  get(id: number): Observable<T>;

  //обновить значение
  deleted(id: number): Observable <T>;

  //удалить значение
  update(T:any): Observable <T>;

  //добавить значение
  getAll(): Observable <T[]>;

}
