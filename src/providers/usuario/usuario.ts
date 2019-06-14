import { configHelper } from './../../app/helpers/configHelper';
import { Injectable } from '@angular/core';
import { ProviderBase } from '../../app/base/providerBase';
import { usuarioModel } from '../../app/models/usuarioModel';
import { HttpProvider } from '../http/http';
import { httpResultModel } from '../../app/models/httpResultModel';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class usuarioProvider extends ProviderBase<usuarioModel> {

url: string = `${configHelper.url}usuario`

  constructor(public http: HttpProvider) {
      //mesmo conceito do java.
      //O super() serve para chamar o construtor da superclasse. 
      //a url é a junção da classe config helper criada que contem: http://localhost/api + usuario que é da nossa rota de usuarios da api
      super(`${configHelper.url}usuario`, http);
  }

    //criando o authenticate da mesma forma do back
  async autenticate(email: string, senha: string): Promise<httpResultModel> {
    //nas rotas da api o autenticar é um post
    return this.http.post(`${this.url}/autenticar`, {email:email, senha:senha});
  }
  async register(usuario: usuarioModel): Promise<httpResultModel>{
    return this.http.post(`${this.url}/register`, usuario);
  }

}
