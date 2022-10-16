import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {

  @Input() customPlaceHolder: string = 'EXAMPLE...';
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  termino: string = '';

  debounce: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(value => this.onDebounce.emit(value))
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  presKey(event: any) {
    const nameCountry = event.target.value;
    this.debounce.next(nameCountry);
  }

}
