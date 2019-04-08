import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HogartService } from './hogart.service';

@Component({
  selector: 'app-hogar',
  templateUrl: './hogar.component.html',
  styleUrls: ['./hogar.component.css']
})
export class HogarComponent implements OnInit {
  auto: any[]
  formAutos: any
  editarTex: boolean = false
  constructor(private _hogarService : HogartService) {
    this.auto = []
  }

  ngOnInit() {
    this.initForm({})
    this.auto = [
      {
        titel: 'Gasfitero',
        text: 'Lorem Ipsum, dolor sit amet conceptotur adipsicing elit'
      }
      
    ]
    this._hogarService.hogar.subscribe(data => {
      console.log(data);
      this.auto.push(
        {
          titel: data.titel,
          text: data.text
        })

    })
  }


  initForm(data) {
    this.formAutos = new FormGroup({
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
      titel: this.formAutos.value.titel,
      text: this.formAutos.value.text
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
