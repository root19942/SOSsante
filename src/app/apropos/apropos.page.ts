import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
})
export class AproposPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  annuler(){
    this.modalCtrl.dismiss();
  }

}
