import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pais } from '../interface/RestContryResponse';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(namePais: string): Observable<Pais[]> {
    // by name => https://restcountries.com/v3.1/name/peru
    const url: string = `${this.url}/name/${namePais}`;
    return this.http.get<Pais[]>(url);
  }

}
