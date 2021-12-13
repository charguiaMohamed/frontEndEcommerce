import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from '../../model/article';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/articles/all');
  }

  postcategory(article: Article): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/articles/create', article );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/articles/' + id);
  }

  findbyCodearticle(code: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/articles/filter/' + code);
  }

  deletecategory(id: number, article: Article): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/articles/delete/' + id);
  }

  updatecategory(id: number, article: Article): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/articles/update/' + id, {
      code: article.code,
      libelle: article.libelle,
      prixHT: article.prixHT,
      prixTTC: article.prixTTC,
      TVA: article.TVA,
      description: article.description,
      categ: article.categ,
      scateg: article.scateg,
      stkInit: article.stkInit
    } );
  }
}
