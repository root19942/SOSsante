import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { AuthGuard } from './guards/auth.guard';
=======
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    redirectTo: 'login',
    pathMatch: 'full',
  },

  { path: 'tabs', canActivate: [AuthGuard], loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  
  { path: 'helper', canActivate: [AuthGuard], loadChildren: './helper/helper.module#HelperPageModule' },
  { path: 'alert', canActivate: [AuthGuard], loadChildren: './alert/alert.module#AlertPageModule' },
  { path: 'rapport', canActivate: [AuthGuard], loadChildren: './rapport/rapport.module#RapportPageModule' },
  { path: 'information', canActivate: [AuthGuard], loadChildren: './information/information.module#InformationPageModule' },
  { path: 'compte', canActivate: [AuthGuard], loadChildren: './compte/compte.module#ComptePageModule' },
  { path: 'tuto', canActivate: [AuthGuard], loadChildren: './tuto/tuto.module#TutoPageModule' },
  { path: 'apropos', canActivate: [AuthGuard], loadChildren: './apropos/apropos.module#AproposPageModule' },
  { path: 'alertencour', canActivate: [AuthGuard], loadChildren: './alertencour/alertencour.module#AlertencourPageModule' },
  { path: 'register',  loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'login',  loadChildren: './login/login.module#LoginPageModule'},
=======
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
>>>>>>> f9c98761773c959bb0d5f1f3a2c5744346a84977
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
