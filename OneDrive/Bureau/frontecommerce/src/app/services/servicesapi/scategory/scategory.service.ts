import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Scategorie} from '../../model/scategorie';


const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class ScategoryService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/scategorie/all');
  }

  postscategory(scategory: Scategorie): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/scategorie/create', scategory );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/scategorie/' + id);
  }

  findbyname(nom: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/scategorie/find/' + nom);
  }
  findbycode(code: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/scategorie/find/' + code);
  }

  deletescategory(id: number, scategory: Scategorie): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/scategorie/delete/' + id);
  }

  updatescategory(id: number, scategory: Scategorie): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/scategorie/update/' + id, {
      code: scategory.code,
      nom: scategory.nom
    } );
  }
}
