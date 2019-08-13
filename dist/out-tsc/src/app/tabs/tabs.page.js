import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AlertPage } from '../alert/alert.page';
import { ModalController } from '@ionic/angular';
let TabsPage = class TabsPage {
    constructor(modalController) {
        this.modalController = modalController;
    }
    lancerSos() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: AlertPage,
                componentProps: {
                    aParameter: true,
                    otherParameter: new Date()
                }
            });
            yield modal.present();
        });
    }
};
TabsPage = tslib_1.__decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [ModalController])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map