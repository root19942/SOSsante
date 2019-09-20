import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.page.html',
  styleUrls: ['./compte.page.scss'],
})
export class ComptePage implements OnInit {

  constructor(public modalCtrl : ModalController) { }

  ngOnInit() {
  }

  annuler(){
    this.modalCtrl.dismiss();
  }

}
