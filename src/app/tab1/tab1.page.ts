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
<<<<<<< HEAD
            "cart_number": numero,
            "cart_type": type
=======
            cart_number: numero,
            cart_type: type
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
         }            
    });

    await modal.present();
  }

}
