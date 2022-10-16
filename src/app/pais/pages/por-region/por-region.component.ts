import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: []
})
export class PorRegionComponent {

  regionesActiva: string = '';
  regiones: string[] = [
    'eu',
    'efta',
    'caricom',
    'pa',
    'au',
    'usan',
    'eeu',
    'al',
    'asean',
    'cais',
    'cefta',
    'nafta',
    'saarc',
  ];

  constructor() { }

  activarRegion(region: string) {
    this.regionesActiva = region;
  }


  getClaseCSS(region: string) {
    console.log(region);

    return region === this.regionesActiva ? 'btn-primary' : 'btn-outline-primary';
  }

}
