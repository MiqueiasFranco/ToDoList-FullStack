import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Servico } from "../models/servico.model";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ServicoService {

    private url = `${environment.api}/servicos`
    constructor(private httpClient: HttpClient){

    }
    obterServico(){
        return this.httpClient.get<Servico[]>(this.url)
    }
    
}