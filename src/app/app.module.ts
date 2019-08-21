import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertPage } from './alert/alert.page';
import { ComptePage } from './compte/compte.page';
import { InformationPage } from './information/information.page';
import { TutoPage } from './tuto/tuto.page';
import { AproposPage } from './apropos/apropos.page';
import { RapportPage } from './rapport/rapport.page';
import { HelperPage } from './helper/helper.page';

@NgModule({
  declarations: [
    AppComponent,
    AlertPage,
    InformationPage,
    ComptePage,
    TutoPage,
    AproposPage,
    RapportPage,
    HelperPage
  ],
  entryComponents: [
    AlertPage,
    InformationPage,
    ComptePage,
    TutoPage,
    AproposPage,
    RapportPage,
    HelperPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
