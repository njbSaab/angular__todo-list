import {Category} from "../../../model/Category";
import {CammonDAO} from "./CammonDAO";
import {Observable} from "rxjs";

export interface CategoryDAO extends CammonDAO <Category>{
 search(title: string): Observable<Category[]>
}
