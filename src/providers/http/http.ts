import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertProvider } from '../alert/alert';
import { SpinnerProvider } from '../spinner/spinner';
import { NetworkProvider } from '../network/network';
import { httpResultModel } from '../../app/models/httpResultModel';

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
    console.log('Hello HttpProvider Provider');
  }

//verificar se está online
//pega a url
//tirar o loader
//resolve

public get(url: string): Promise<httpResultModel> {
  this.spinnerSrvc.show('Carregando os dados ...');

  return new Promise((resolve) => {
    if(this.networkSrvc.isOnline){
      //método http do angular
      this.http.get(url).subscribe(_res =>{
        this.spinnerSrvc.hide();
        resolve({success: true, data: _res, err: undefined});
      }, err =>{
          //ocultando o alert caso de um erro no get
          this.spinnerSrvc.hide();
          this.alertSrvc.toast('Não foi possível consultar os dados, verifique sua conexão e tente novamente', 'bottom');
          resolve({success: false, data: undefined, err: err});
      });

    }else {
      this.alertSrvc.toast('Você está offline e por isso não pode acessar os dados', 'bottom');
      resolve({success: true, data: [], err: undefined});
    }

  })
}

}
