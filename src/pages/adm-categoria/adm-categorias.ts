import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { categoriaModel } from '../../app/models/categoriaModel';

/**
 * Generated class for the AdmCategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adm-categorias',
  templateUrl: 'adm-categorias.html',
})
export class AdmCategoriasPage {
categoria: categoriaModel;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {

      let _categ = this.navParams.get('_categoria');
      if(_categ){
        this.categoria = <categoriaModel>_categ
      }else {
        this.categoria = new categoriaModel();
      }
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdmCategoriasPage');
  }

}
