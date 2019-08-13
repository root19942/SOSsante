import { Component } from '@angular/core';
import { AlertPage } from '../alert/alert.page';
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
          component: AlertPage,
          componentProps: {
             aParameter: true,
             otherParameter: new Date()
          }
    });
    
    await modal.present();
}

}
