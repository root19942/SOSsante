import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlertencourPage } from './alertencour.page';
const routes = [
    {
        path: '',
        component: AlertencourPage
    }
];
let AlertencourPageModule = class AlertencourPageModule {
};
AlertencourPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AlertencourPage]
    })
], AlertencourPageModule);
export { AlertencourPageModule };
//# sourceMappingURL=alertencour.module.js.map