import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../../model/user';


const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/users/all');
  }

  postuser(users: User): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/users/create', users );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/users/' + id);
  }

  findbyname(nom: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/users/find/' + nom);
  }

  deleteuser(id: number, users: User): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/users/delete/' + id);
  }

  updateuser(id: number, users: User): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/users/update/' + id, {
      nom : users.nom,
      prenom : users.prenom,
      tel : users.tel,
      adresse: users.adresse,
      email: users.email,
      password: users.password,
      role: users.role
    } );
  }
}
