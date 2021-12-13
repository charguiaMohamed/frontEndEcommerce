import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Entreprise} from '../../model/entreprise';

const AUTH_API = environment.baseURL;


@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/entreprises/all');
  }
  // tslint:disable-next-line:no-shadowed-variable
  postentreprise(entreprise: Entreprise): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/entreprises/create', entreprise );
  }

  // tslint:disable-next-line:no-shadowed-variable typedef
  deleteEntreprise(id: number, entreprise: Entreprise): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/entreprises/delete/' + id);
  }
  // tslint:disable-next-line:typedef
  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/entreprises/' + id);
  }
}
