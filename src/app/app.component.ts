import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { usuarioProvider } from '../providers/usuario/usuario';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //colocado como string, dessa forma o próprio ionic se encarrega de encontrar a página e fazer o carregamento dela.
  //fazendo a autenticação, caso o usuário esteja logado irá direto para a primeiro página após logar, caso contrário será inviado para a tela de login
  rootPage:any = usuarioProvider.isLogado ? 'CategoriaPage' : 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

