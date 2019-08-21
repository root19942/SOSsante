import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelperPage } from '../helper/helper.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController:ModalController) {}

  async helper(numero,type) {
    const modal: HTMLIonModalElement =
      await this.modalController.create({
          component: HelperPage,
          componentProps: {
            cart_number: numero,
            cart_type: type
         }            
    });

    await modal.present();
  }

}
