import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Brand} from '../../model/brand';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }
  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/brands/all');
  }

  postbrand(brand: Brand): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/brands/create', brand );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/brands/' + id);
  }

  findbyname(nom: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/brands/find/' + nom);
  }

  deletebrand(id: number, brand: Brand): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/brands/delete/' + id);
  }

  updatebrand(id: number, brand: Brand): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/brands/update/' + id, {
      marque : brand.marque,
    } );
  }
}
