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

  buscarCapital(nameCapital: string): Observable<Pais[]> {
    // https://restcountries.com/v2/capital/{capital}
    // https://restcountries.com/v2/capital/lima
    const url: string = `${this.url}/capital/${nameCapital}`;
    return this.http.get<Pais[]>(url);
  }

  /**
   * esto en el video returna sol un objeto [Pais].
   * Ahora retorna un arreglo con un unico [Pais]
   */
  getCountryByAlphaId(alphaId: string): Observable<Pais[]> {
    // https://restcountries.com/v3.1/alpha/{code}
    // https://restcountries.com/v3.1/alpha/pe
    // https://restcountries.com/v3.1/alpha/per
    const url: string = `${this.url}/alpha/${alphaId}`;
    return this.http.get<Pais[]>(url);
  }

}
