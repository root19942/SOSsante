import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  public authorisation : boolean = false;

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }

  annuler(){
    this.modalCtrl.dismiss();
  }
  authoriser(){
    this.authorisation = this.authorisation ? false: true;
  }

}
