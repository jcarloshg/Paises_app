import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interface/RestContryResponse';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino: string = '';
  existErr: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) { }

  buscar(nameCapital: string) {
    this.termino = nameCapital.trim();
    this.existErr = false;
    const capital: string = nameCapital.trim();
    this.paisService.buscarCapital(capital)
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

}
