import { Injectable } from '@angular/core';
import { Camera, CameraOptions, EncodingType} from '@ionic-native/camera/ngx'
import { Platform } from 'ionic-angular';

@Injectable()
export class CameraProvider {

  constructor(
    private camera: Camera,
    private platform: Platform
    ) {

  }

private _getPicture(source: number, callback): void {
      if(this.platform.is('cordova')){
        this.platform.ready().then(() =>{
          try {
            //definidno as opções e configurações da foto
            let options: CameraOptions = {
              quality: 70,
              //DATA_URL é a imagem convertida em base64, vai devolver em base64 pra gente
              destinationType: this.camera.DestinationType.DATA_URL,
              //definindo da onde vai vir, aqui se escolhe se irá vir da câmera, galeria, etc.
              sourceType: source,
              //se permite a pessoa editar a foto depois de tirar
              allowEdit: true,
              //como a imgem será salva
              encodingType: this.camera.EncodingType.JPEG,
               //escolher se a foto vai ser salva na galeria do celular
               saveToPhotoAlbum: false,
               //defenir a orientação correta
               correctOrientation: true             
            }

              this.camera.getPicture(options).then((imgData)=>{
                  //ajustando a imagem, e no final ${}=> vai o que será o resultado da captura
                    let base64image = `data:image/jpeg;base64,${imgData}`
                    callback(base64image);
              }, err =>{
                    console.log('Problema ao capturar a foto', err)
              });
          } catch (error) {
              console.log('problema ao tirar a foto', error)
          }

        })
      }else {
        alert('Disponibilidade disponível somente no device')
      }
}

//criando método para pegar a foto da galeria
public getPictureFromGalery(callback): void{
  this._getPicture(this.camera.PictureSourceType.PHOTOLIBRARY, photo =>{ 
    //pegando a foto escolhida
    callback(photo)
  });
}

//criando um método para tirar a foto
public takePicture(callback): void {
  this._getPicture(this.camera.PictureSourceType.CAMERA, photo =>{
    //pegando a foto tirada
    callback(photo)
  });
}


}
