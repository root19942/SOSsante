import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-alertencour',
  templateUrl: './alertencour.page.html',
  styleUrls: ['./alertencour.page.scss'],
})
export class AlertencourPage implements OnInit {
  public myAngularxQrCode: string = null;
  constructor(private barcodeScanner: BarcodeScanner) { 
    this.myAngularxQrCode = 'Your QR code data string';
   }

  ngOnInit() {
  }

}
