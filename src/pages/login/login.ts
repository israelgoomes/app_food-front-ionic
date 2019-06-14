import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { usuarioProvider } from '../../providers/usuario/usuario';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  form: any ={

  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private usuarioSrv: usuarioProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

async login(): Promise<void> {
 let result = await this.usuarioSrv.autenticate(this.form.email, this.form.senha);
console.log(result);
if(result.success){
  //enviar para rota certa;
}
}

abrirCadastro(){
  this.navCtrl.setRoot('CadastroPage');
}
}
