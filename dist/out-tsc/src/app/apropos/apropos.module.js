import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AproposPage } from './apropos.page';
const routes = [
    {
        path: '',
        component: AproposPage
    }
];
let AproposPageModule = class AproposPageModule {
};
AproposPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [AproposPage]
    })
], AproposPageModule);
export { AproposPageModule };
//# sourceMappingURL=apropos.module.js.map