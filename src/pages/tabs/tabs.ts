import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public app: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

  selecionarCategoria(event): void{

    //criando uma variável para pegar a navegacao Anterior, usando o event criado no ionselect das tabs, e através dele
    //pegando o tamanho history do linker e lista o histórico de navegação e subtraindo 2 para chegar até a página que queremos, no caso a categoria.(Aula 21-Definindo layout)
    let navegacaoAnterior = event.linker._history[event.linker._history.length - 2];
    console.log('ultimo', navegacaoAnterior);
console.log('Tab', event);
console.log(event.tabTitle);

if(navegacaoAnterior != '/categoria'){
  this.app.getRootNav().setRoot('CategoriaPage');
}
  }
}
