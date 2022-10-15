import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private url: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  buscarPais(namePais: string) {
    // by name => https://restcountries.com/v3.1/name/peru
    const url: string = `${this.url}/name${namePais}`;
    // this.http.get();
  }

}