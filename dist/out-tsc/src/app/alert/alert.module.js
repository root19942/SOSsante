import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertPage } from './alert.page';
const routes = [
    {
        path: '',
        component: AlertPage
    }
];
let AlertPageModule = class AlertPageModule {
};
AlertPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AlertPage]
    })
], AlertPageModule);
export { AlertPageModule };
//# sourceMappingURL=alert.module.js.map