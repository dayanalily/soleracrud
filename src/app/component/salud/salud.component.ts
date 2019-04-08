import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SaludService } from './salud.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.css']
})
export class SaludComponent implements OnInit {
  auto: any[]
  formSalud: any
  editarTex: boolean = false
  constructor(private _saludService : SaludService) {
    this.auto = []
  }

  ngOnInit() {
    this.initForm({})
    this.auto = [
      {
        titel: 'Medico a Domicilio',
        text: 'Lorem Ipsum, dolor sit amet conceptotur adipsicing elit'
      },
      {
        titel: 'Ambulancia',
        text: 'Lorem Ipsum, dolor sit amet conceptotur adipsicing elit'
      },
     
    ]

    this._saludService.salud.subscribe(data => {
      console.log(data);
      this.auto.push(
        {
          titel: data.titel,
          text: data.text
        })

    })
  }


  initForm(data) {
    this.formSalud = new FormGroup({
      titel: new FormControl(data.titel ? data.titel : "", [Validators.required]),
      text: new FormControl(data.text ? data.text : "", [Validators.required]),
    })
  }

  editar(item) {
    this.editarTex = true
    for (let y = 0; y < this.auto.length; y++) {
      const element = this.auto[y]
      if (item == element) {
        this.initForm(item)
        this.eliminar(item)
      }
    }
  }

  confirmarEditar() {
    this.auto.push({
      titel: this.formSalud.value.titel,
      text: this.formSalud.value.text
    })
    this.editarTex = false
  }

  eliminar(item) {
    for (let y = 0; y < this.auto.length; y++) {
      const element = this.auto[y]
      if (item == element) {
        var index = this.auto.indexOf(item);
        this.auto.splice(index, 1)
        
      }
    }
  }


}
