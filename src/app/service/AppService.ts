import { HttpClient,  HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { UsuarioDTO} from "../models/UsuarioDTO";
import { UsuarioToken } from "../models/UsuarioToken";
@Injectable({ providedIn: 'root'})


 export class Service
 {
    private readonly urlToken = environment["jwtFoodService"];
    private readonly urlApiFoodService = environment["ApiFoodService"];
    tokenUsuario: any;
   
    constructor (private  httpClient: HttpClient)
    {

    }

    public  GerarToken(){

        var url = this.urlToken;
           
        var UsuarioDTO = {
            email: "manoelcontatosi@gmail.com",
            Password: "Si@010101"
        }

     return this.tokenUsuario = this.httpClient.post<UsuarioToken>(url,UsuarioDTO);

    }

 }