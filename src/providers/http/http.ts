import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AlertProvider } from "../alert/alert";
import { SpinnerProvider } from "../spinner/spinner";
import { NetworkProvider } from "../network/network";
import { httpResultModel } from "../../app/models/httpResultModel";
import { usuarioProvider } from '../usuario/usuario';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  constructor(
    private http: HttpClient,
    private alertSrvc: AlertProvider,
    private spinnerSrvc: SpinnerProvider,
    private networkSrvc: NetworkProvider
  ) {
  }

  //verificar se está online
  //pega a url
  //tirar o loader
  //resolve



//criando o esquema para pegar o token e ter permissão de get, post, put ao logar.
public createHeader(header?: HttpHeaders): HttpHeaders{
    if(!header){
      header = new HttpHeaders();
    }
//dizendo que quer que seja trafegado http o aplication json
header = header.append('Content-Type', 'application/json');
//dizendo que só vai aceitar se for json
header = header.append('Accept', 'application/json')

let token = usuarioProvider.getTokenAccess;
if(token){
  header = header.append('user-token', token);
}

    return header;
}


  public get(url: string): Promise<httpResultModel> {
    this.spinnerSrvc.show("Carregando os dados ...");
    let header = this.createHeader();
    return new Promise(resolve => {
      if (this.networkSrvc.isOnline) {
        //método http do angular
        this.http.get(url, {headers: header}).subscribe(
          _res => {
            this.spinnerSrvc.hide();
            resolve({ success: true, data: _res, err: undefined });
          },
          err => {
            //ocultando o alert caso de um erro no get
            this.spinnerSrvc.hide();
            this.alertSrvc.toast(
              "Não foi possível consultar os dados, verifique sua conexão e tente novamente",
              "bottom"
            );
            resolve({ success: false, data: undefined, err: err });
          }
        );
      } else {
        this.alertSrvc.toast(
          "Você está offline e por isso não pode acessar os dados",
          "bottom"
        );
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }
  //--------------------------POST---------------------------------------------
  public post(url: string, model: any): Promise<httpResultModel> {
    
    this.spinnerSrvc.show("Salvando informações...");
    return new Promise(resolve => {
      if (this.networkSrvc.isOnline) {
        this.http.post(url, model).subscribe(
          _res => {
            this.spinnerSrvc.hide();
            resolve({ success: true, data: _res, err: undefined });
          },
          err => {
            this.spinnerSrvc.hide();
            console.log(err);

            //
            if (err.status == 400) {
              let msg = "";
              err.error.validation.forEach(_err =>{
                msg += `<li>${_err.message}</li>`;
              });
              this.alertSrvc.alert(err.error.message, msg);

            } 
            else if(err.status == 404){
              this.alertSrvc.alert("informação", err.error.message);
            }
            else
              this.alertSrvc.toast(
                "Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente",
                "bottom"
              );
            resolve({ success: false, data: undefined, err: err });
          }
        );
      } else {
        this.alertSrvc.toast(
          "Você está offline e infelizmente não pode ser enviado os dados",
          "bottom"
        );
        resolve({ success: true, data: [], err: undefined });
      }
    });
  }
  //--------------------------------------------------------------------------------


//--------------------------------------------UPDATE--------------------------------------------------------
  public put(url: string, model: any): Promise<httpResultModel>{
    this.spinnerSrvc.show('Atualizando informações..');
    return new Promise((resolve) =>{
      if(this.networkSrvc.isOnline){
        this.http.put(url, model).subscribe(_res =>{
          this.spinnerSrvc.hide();
          resolve({success: true, data: _res, err: undefined});
        }, err=>{
          this.spinnerSrvc.hide();
          console.log(err);
          if(err.status == 400){
              let msg ='';
              err.error.validation.forEach(_err =>{
                msg += `<li>${_err.message}</li>`;
              });
              this.alertSrvc.alert(err.errors.message, msg);
          }
          else 
          this.alertSrvc.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom');
          resolve({success: false, data: undefined, err: err});
        });
      }
      else {
        this.alertSrvc.toast('Você está offline e infelizmente não pode ser enviado os dados!', 'bottom');
        resolve({success: true, data: [], err: undefined});
      }
    })
  }
//----------------------------------------------------------------------------------------------------

//--------------------------------------------DELETE--------------------------------------------------------
public delete(url: string): Promise<httpResultModel>{
  this.spinnerSrvc.show('Removendo registro');
  return new Promise((resolve) =>{
    if(this.networkSrvc.isOnline){
      this.http.delete(url).subscribe(_res =>{
        this.spinnerSrvc.hide();
        resolve({success: true, data: _res, err: undefined})
      }, err =>{
        this.spinnerSrvc.hide();
        this.alertSrvc.toast('Não foi possível realizar o processamento da informação, verifique sua conexão e tente novamente', 'bottom')
        resolve({success: false, data: undefined, err: err});
      });
    } else {
      this.alertSrvc.toast('Você está offline e infelizmente não pode ser enviado os dados!', 'bottom');
      resolve({success: true, data: [], err: undefined});
    }
  })
}
//-------------------------------------------------------------------------------------------------
}
