import { Component } from '@angular/core';
import { Pais } from '../../interface/RestContryResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {

  termino: string = '';
  existErr: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(namePais: string) {
    this.termino = namePais.trim();
    this.existErr = false;
    const nombrePais: string = namePais.trim();
    this.paisService.buscarPais(nombrePais)
      .subscribe(
        paises => {
          this.paises = paises;
        },
        error => {
          this.existErr = true;
          this.paises = [];
        }
      );
  }

  suggestionsNamesFromCountries(name: string) {

    this.termino = name.trim();
    const nombrePais: string = name.trim();
    this.existErr = false;
  }



}
