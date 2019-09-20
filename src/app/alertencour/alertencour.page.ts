import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";
=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

@Component({
  selector: 'app-alertencour',
  templateUrl: './alertencour.page.html',
  styleUrls: ['./alertencour.page.scss'],
})
export class AlertencourPage implements OnInit {
<<<<<<< HEAD
  public myAngularxQrCode: string = null;
  constructor(private barcodeScanner: BarcodeScanner) { 
    this.myAngularxQrCode = 'Your QR code data string';
   }
=======

  constructor() { }
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

  ngOnInit() {
  }

}
