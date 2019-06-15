import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Platform } from 'ionic-angular';
import { categoriaModel } from '../../app/models/categoriaModel';
import { CameraProvider } from '../../providers/camera/camera';

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
    public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    public platform: Platform,
    private cameraSrvc: CameraProvider
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


  //criando a função de tirar foto
  getPictureOptions(): void {
    //actionSheet serve para aparecer as opções, se a foto será escolhida na galeria ou tirada na hora.
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Adicionar foto',
      buttons: [
        { text: 'Tirar foto', handler: () => {
          //escolhendo a opção de tirar foto no cameraprovider que foi criado, e assumindo o valor da photo para o categoria.foto
          this.cameraSrvc.takePicture(photo =>{
            this.categoria.foto = photo;
          })

        }, 
        icon: this.platform.is('ios')? null : 'camera' },
//------------------------ Opção pegar da galeria ------------
        { text: 'Pegar galeria', handler: () =>{
          this.cameraSrvc.getPictureFromGalery(photo =>{
            this.categoria.foto = photo;
          })

        }, icon: this.platform.is('ions')? null : 'images'},
        //o role 'destructive' deixa o botao vermelho
        {text: 'Cancelar', role: 'destructive',handler: () => {
          //cancela a ação
        }, }
      ]
    });
    actionSheet.present();

  }
}
