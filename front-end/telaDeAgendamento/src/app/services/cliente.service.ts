import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Client } from "../models/Clientes.model";

@Injectable({
    providedIn: 'root'
})

export class ClientService {

    private url = `${environment.api}/clients`

    constructor(private httpClient: HttpClient){
    }

    criarCliente(cliente: Client){
        return this.httpClient.post<Client>(this.url, cliente)
    }
    obterClientes(){
        return this.httpClient.get<Client[]>(this.url)
    }
    
}