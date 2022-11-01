import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { InicioModel } from '../model/inicio.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  gerador!: number;
  resposta!: string;

  inicioModel!: InicioModel;
  inicioForm!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.inicioForm = this.formBuilder.group({
      entradaModel: [
        '',
        [Validators.required, Validators.pattern(/^[1-9][0-9]?$|^100$/)],
      ],
    });
  }

  funcGerar(): void {
    this.gerador = Math.floor(Math.random()*100)+ 1;
  }

  funcProcessa(): string {
    const vazio = this.inicioForm.getRawValue() as InicioModel;
    this.funcGerar();
    if(vazio.entradaModel == this.gerador) {
      return (this.resposta = "Você ganhou...");
    } else {
      return (this.resposta = "Você perdeu...Tente Novamente.");
    }
  }

  get entradaModel() {
    return this.inicioForm.get('entradaModel'!);
  }

}
