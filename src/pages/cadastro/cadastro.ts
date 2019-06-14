import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuarioModel } from '../../app/models/usuarioModel';
import { usuarioProvider } from '../../providers/usuario/usuario';
import { AlertProvider } from '../../providers/alert/alert';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
usuario: usuarioModel = new usuarioModel();

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  public usuarioSrvc: usuarioProvider  ,
  private alertSrvc: AlertProvider
  ) {
  }

  async cadastrar(): Promise<void>{
    let cadastroResult = await this.usuarioSrvc.register(this.usuario);
    if(cadastroResult.success){
      this.alertSrvc.toast('Cadastro realizado com sucesso', 'bottom');
      this.navCtrl.setRoot('LoginPage')
    }
}
cancelar(){
  this.navCtrl.setRoot('LoginPage');
}
}
