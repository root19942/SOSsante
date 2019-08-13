import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RapportPage } from './rapport.page';
const routes = [
    {
        path: '',
        component: RapportPage
    }
];
let RapportPageModule = class RapportPageModule {
};
RapportPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [RapportPage]
    })
], RapportPageModule);
export { RapportPageModule };
//# sourceMappingURL=rapport.module.js.map