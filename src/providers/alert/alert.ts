import { Injectable } from "@angular/core";
import { AlertController, ToastController } from "ionic-angular";

@Injectable()
export class AlertProvider {
  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  //o toast é responsável pela barrinha que abre em baixo
  toast(title: string, position: string): void {
    //criando o toast passando a message conforme o parametro do método, e uma duração de 3segundos
    let toast = this.toastCtrl.create({
      message: title,
      position: position,
      duration: 3000
    });
    toast.present();
  }

  alert(title: string, message: string): void {
    this.alertCtrl
      .create({
        title: title,
        message: message,
        //buttons é um array
        buttons: ["OK"],
        //Se clicar fora do alert ele fecha caso esteja true.
        enableBackdropDismiss: false
      })
      .present();
  }

  confirm(title: string, message: string, callback: any): void {
    this.alertCtrl.create({
      title: title,
      message: message,
      buttons: [
        //é criado o texto e a ação(handler), o role 'Cancel' nesse caso faz com que a cor do botão fique vermelha (sim, é necessário colocar o 'Cancel' também!)
        { text: "Não", role: 'Cancel',  handler: () => { console.log('Confirm:Say:no') } },
        { text: "Sim", handler: () => {//aqui é executado o que a pessoa mandar na hr
          callback();
         }}
      ]
    }).present();
  }


}
