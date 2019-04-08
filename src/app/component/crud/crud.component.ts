import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HogartService } from '../hogar/hogart.service';
import { AutosService } from '../autos/autos.service';
import { SaludService } from '../salud/salud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public formSistemas: any;
  variables: any
  constructor(private _hogarService: HogartService,
    private _autosService: AutosService,
    private _saludService: SaludService) { }

  ngOnInit() {
    this.initForm({})
  }


  initForm(data) {
    this.formSistemas = new FormGroup({
      nombre: new FormControl(data.CodSis ? data.CodSis : "", [Validators.required]),
      descripcion: new FormControl(data.Sis ? data.Sis : "", [Validators.required]),
    })
  }


  guardar() {


    let obj = {
      titel: this.formSistemas.value.nombre,
      text: this.formSistemas.value.descripcion
    }
    console.log(obj);
    if (this.formSistemas.value.nombre == "autos") {
      this._autosService.datosAutos(obj)
      console.log(obj);

    }
    if (this.formSistemas.value.nombre == "hogar") {
      this._hogarService.datosHogar(obj)
      console.log(obj);

    }
    if (this.formSistemas.value.nombre == "salud") {
      this._autosService.datosAutos(obj)
      console.log(obj);

    }
    
    this.initForm({})
  }

  cancelar() {
    this.initForm({})
  }
}
