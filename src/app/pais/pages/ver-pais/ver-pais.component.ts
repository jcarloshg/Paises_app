import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interface/RestContryResponse';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Pais;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService,
  ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(
          ({ id }) => this.paisService.getCountryByAlphaId(id)
        ),
        tap(paisResponse => console.log(`[tap] -> `, paisResponse))
      )
      .subscribe(
        pais => {
          console.log(`[susbcaribe] -> `, pais);
          this.pais = pais[0];
        }
      )

    // this.activatedRoute.params
    //   .subscribe(
    //     params => {
    //       const { id } = params;
    //       this.paisService.getCountryByAlphaId(id)
    //         .subscribe(
    //           pais => {
    //             console.log(`[getCountryByAlphaId] -> `, pais);
    //           }
    //         )
    //     }
    //   )
  }

}
