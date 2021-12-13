import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commande} from '../../model/commande';

const AUTH_API = environment.baseURL;

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }


  getData(): Observable<any[]>{
    return this.http.get<any[]>(AUTH_API + 'E_Commerce/CommandeClient/all');
  }

  postcommande(commande: Commande): Observable<any>{
    return this.http.post( AUTH_API + 'E_Commerce/CommandeClient/create', commande );
  }

  findbyId(id: number): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/CommandeClient/' + id);
  }

  findbycode(code: string): Observable<any>{
    return this.http.get( AUTH_API + 'E_Commerce/CommandeClient/filter/' + code);
  }

  deletecommande(id: number, commande: Commande): Observable<any>{
    return this.http.delete(AUTH_API + 'E_Commerce/CommandeClient/delete/' + id);
  }
  // tslint:disable-next-line:ban-types
  saveOrUpdate(info: Object): Observable<Object> {

    return this.http.post(AUTH_API + 'E_Commerce/CommandeClient/update/', info);
  }

  updatecommande(id: number, commande: Commande): Observable<any> {
    return this.http.post(AUTH_API + 'E_Commerce/CommandeClient/update/' + id, {
      codecmd: commande.codecmd,
      libelle: commande.libelle,
      totale: commande.totale,
      date:  commande.date
    } );
  }
}
