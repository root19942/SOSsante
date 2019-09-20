import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ViewController } from '@ionic/core';
let AlertPage = class AlertPage {
    constructor(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    ngOnInit() {
    }
    annulerSos() {
        this.viewCtrl._destroy;
    }
};
AlertPage = tslib_1.__decorate([
    Component({
        selector: 'app-alert',
        templateUrl: './alert.page.html',
        styleUrls: ['./alert.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [ViewController])
], AlertPage);
export { AlertPage };
//# sourceMappingURL=alert.page.js.map