import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
