import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
const routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    { path: 'helper', loadChildren: './helper/helper.module#HelperPageModule' },
    { path: 'alert', loadChildren: './alert/alert.module#AlertPageModule' },
    { path: 'rapport', loadChildren: './rapport/rapport.module#RapportPageModule' },
    { path: 'information', loadChildren: './information/information.module#InformationPageModule' },
    { path: 'compte', loadChildren: './compte/compte.module#ComptePageModule' },
    { path: 'tuto', loadChildren: './tuto/tuto.module#TutoPageModule' },
    { path: 'apropos', loadChildren: './apropos/apropos.module#AproposPageModule' },
    { path: 'alertencour', loadChildren: './alertencour/alertencour.module#AlertencourPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map