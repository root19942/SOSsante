import { Component } from '@angular/core';
import { RapportPage } from '../rapport/rapport.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController:ModalController) {}

  async showrapport(){
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: RapportPage            
      });

      await modal.present();
  }

}
