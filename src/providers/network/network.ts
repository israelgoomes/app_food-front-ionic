import { Injectable } from "@angular/core";
import { Platform } from "ionic-angular";

declare var navigator: any;
declare var Connection: any;
@Injectable()
export class NetworkProvider {
  constructor(private platform: Platform) {}

  get isOnline(): boolean {
    if (this.platform.is("cordova")) {
      //verificando se existe a connection, e se sim verificando o tipo da conexão
      if (navigator.connection && navigator.connection.type) {
        return (
          navigator.connection != Connection.UNKKONW &&
          navigator.connection.type != Connection.NONE
        );
      }
    //se não consiga checar as informações a cima ele retorna true, caso não seja devide ele vai para o else abaixo.  
      else 
      return true;
    } else {
      return navigator.onLine;

    }
  }
}
