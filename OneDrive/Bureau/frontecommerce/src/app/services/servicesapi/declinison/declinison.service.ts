import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Declinison} from '../../model/declinison';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class DeclinisonService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/declinison/all');
  }

  postdeclinaison(declinison: Declinison): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/declinison/create', declinison );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/declinison/' + id);
  }

  deletedeclinison(id: number, declinison: Declinison): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/declinison/delete/' + id);
  }

  updatedeclinison(id: number, declinison: Declinison): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/declinison/update/' + id, {
      couleur: declinison.couleur,
      taille: declinison.taille
    } );
  }
}
