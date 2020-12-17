import { NgModule } from '@angular/core';
import { PreloadAllModules, Router, RouterModule, Routes } from '@angular/router';
import { Platform } from '@ionic/angular';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'adicionar',
    loadChildren: () => import('./adicionar/adicionar.module').then(m => m.AdicionarPageModule)
  },
  {
    path: 'editar',
    loadChildren: () => import('./editar/editar.module').then(m => m.EditarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private plataform: Platform, private router: Router) {
    plataform.ready().then()
    if (false) {
      router.navigateByUrl('/')
    } else {
      router.navigateByUrl('/login')
    }
  }
}