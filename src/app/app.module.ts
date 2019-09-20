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
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { AlertencourPage } from './alertencour/alertencour.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    AlertPage,
    InformationPage,
    ComptePage,
    TutoPage,
    AproposPage,
    RapportPage,
    HelperPage,
    AlertencourPage
  ],
  entryComponents: [
    AlertPage,
    InformationPage,
    ComptePage,
    TutoPage,
    AproposPage,
    RapportPage,
    HelperPage,
    AlertencourPage
  ],
  imports: [BrowserModule, IonicModule.forRoot(), QRCodeModule, AppRoutingModule,HttpClientModule,IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
