import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { InformationPage } from './information.page';
const routes = [
    {
        path: '',
        component: InformationPage
    }
];
let InformationPageModule = class InformationPageModule {
};
InformationPageModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            IonicModule,
            RouterModule.forChild(routes)
        ],
        declarations: [InformationPage]
    })
], InformationPageModule);
export { InformationPageModule };
//# sourceMappingURL=information.module.js.map