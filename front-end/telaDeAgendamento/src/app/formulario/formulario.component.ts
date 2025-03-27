import { Component } from '@angular/core';
import { SlideComponent } from '../slide/slide.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Client } from '../models/Clientes.model';
import { Servico } from '../models/servico.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-formulario',
  imports: [SlideComponent, CommonModule,FormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  cliente$ = new Observable<Client>()
  servico$ = new Observable<Servico>()
  nome = ''
  celular = ''
  horario = ''
  constructor(){
    
  }

  pegarDadosFormulario(){
    const dados = [this.nome, this.celular, this.horario]
    return dados
  }
  
}
