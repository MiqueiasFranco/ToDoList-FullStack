import { Component, Injectable } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormularioComponent } from "../formulario/formulario.component";
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, FormularioComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  

})

@Injectable({
  providedIn: 'root'
})



export class HomeComponent {

 
  
  /*cadastrarCliente(){
    this.clienteService.criarCliente({ nome: this.nome, celular: this.celular, horario:this.horario, servico: this.slideComponent.obterNomeServico()})
  }*/

  
}
