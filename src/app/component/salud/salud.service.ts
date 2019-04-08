import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SaludService {
  @Output() salud: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  datosSalud(data) {
     this.salud.emit(data);
     console.log(data);
     
   }
}
