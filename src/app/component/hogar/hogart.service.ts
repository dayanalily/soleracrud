import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HogartService {
  @Output() hogar: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  datosHogar(data) {
     this.hogar.emit(data);
     console.log(data);
     
   }
}
