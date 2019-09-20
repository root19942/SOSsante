import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HelperPage } from './helper.page';
const routes = [
    {
        path: '',
        component: HelperPage
    }
];
let HelperPageModule = class HelperPageModule {
};
HelperPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [HelperPage]
    })
], HelperPageModule);
export { HelperPageModule };
//# sourceMappingURL=helper.module.js.map