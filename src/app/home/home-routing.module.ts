import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: '',
        loadChildren: () => import('./fazer/fazer.module').then(m => m.FazerPageModule)
      },
      {
        path: 'fazer',
        loadChildren: () => import('./fazer/fazer.module').then(m => m.FazerPageModule)
      },
      {
        path: 'dicas',
        loadChildren: () => import('./dicas/dicas.module').then(m => m.DicasPageModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
