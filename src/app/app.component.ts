import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
<<<<<<< HEAD
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
<<<<<<< HEAD
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    private router: Router
=======
    private statusBar: StatusBar
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
<<<<<<< HEAD
      this.authenticationService.authenticationState.subscribe(state => {
        if (state) {
          this.router.navigate(['tabs']);
        } else {
          this.router.navigate(['login']);
        }
      })
=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
    });
  }
}
