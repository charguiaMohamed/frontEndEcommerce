import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
// @ts-ignore
import {Categorie} from '../../model/categorie';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/categories/allCategorie');
  }

  postcategory(category: Categorie): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/categories/create', {
      name: category.name
    } );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/categories/' + id);
  }

  findbyCode(code: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/categories/filter/' + code);
  }

  deletecategory(id: number): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/categories/delete/' + id);
  }

  updatecategory(id: number, category: Categorie): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/categories/update/' + id, {
      code : category.code,
      libelle : category.libelle
    } );
  }
}
