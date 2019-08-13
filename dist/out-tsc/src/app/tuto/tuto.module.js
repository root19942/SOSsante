import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TutoPage } from './tuto.page';
const routes = [
    {
        path: '',
        component: TutoPage
    }
];
let TutoPageModule = class TutoPageModule {
};
TutoPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [TutoPage]
    })
], TutoPageModule);
export { TutoPageModule };
//# sourceMappingURL=tuto.module.js.map