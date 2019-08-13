import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InformationPage } from '../information/information.page';
import { ComptePage } from '../compte/compte.page';
import { TutoPage } from '../tuto/tuto.page';
import { AproposPage } from '../apropos/apropos.page';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public modalController:ModalController) {}

    async inforrmation() {
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: InformationPage            
      });

      await modal.present();
    }

    async compte() {
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: ComptePage            
      });

      await modal.present();
    }

    async tuto() {
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: TutoPage            
      });

      await modal.present();
    }

    async apropos() {
      const modal: HTMLIonModalElement =
        await this.modalController.create({
            component: AproposPage            
      });

      await modal.present();
    }
}
