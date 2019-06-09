import { Injectable } from "@angular/core";
import { LoadingController, Loading } from "ionic-angular";

/*
  Generated class for the SpinnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpinnerProvider {
  //criando uma variável caham spinner do tipo loading
  private spinner: Loading = null;

  constructor(public loading: LoadingController) {}

  //criando um método para chamar a spinner
  Show(message: string): void {
    if (!this.spinner) {
      /*Se o spinner for vazio irá entrar nessa condição.
      aqui adiciona ao spinner um create do loading do ionic, e no content dele é adicionado uma message que foi declarada no método, caso a informação venha nula irá aparecer 'Carregando...' */

      this.spinner = this.loading.create({ content: message || "Carregando" });
      //
      this.spinner.present();
    } else {
      this.spinner.data.content = message;
    }
  }

  //criando o método hide para esconder quando necessário
  Hide(): void {
    if (this.spinner) {
      this.spinner.dismiss();
      this.spinner = null;
    }
  }
}
