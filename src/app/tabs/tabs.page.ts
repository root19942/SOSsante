import { Component } from '@angular/core';
import { AlertPage } from '../alert/alert.page';
<<<<<<< HEAD
import { AlertencourPage } from '../alertencour/alertencour.page';
=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(public modalController:ModalController) {}

  async lancerSos() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
<<<<<<< HEAD
          component: AlertPage
    });
    
    await modal.present();
}
  async sosEnCours() {
    const modal: HTMLIonModalElement =
       await this.modalController.create({
          component: AlertencourPage,
=======
          component: AlertPage,
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });
    
    await modal.present();
}

}
