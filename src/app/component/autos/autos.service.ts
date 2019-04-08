import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutosService {
  @Output() auto: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  datosAutos(data) {
     this.auto.emit(data);
     console.log(data);
     
   }
}
