import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { categoriaModel } from '../../app/models/categoriaModel';
import { CategoriaProvider } from '../../providers/categoria/categoria';

/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

lista: Array<categoriaModel> = new Array<categoriaModel>();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private categoriaSrvc: CategoriaProvider
    ) { 
      this._loadData();
  }

   private async _loadData(): Promise<void>{
    let categoriaResult = await this.categoriaSrvc.get();
    if(categoriaResult.success){
      this.lista = <Array<categoriaModel>>categoriaResult.data;
    }
  }
addOrEdit(model?: categoriaModel): void{
      this.navCtrl.push('AdmCategoriasPage', {_categoria: model})
}

}
