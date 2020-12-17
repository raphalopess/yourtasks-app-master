import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FazerPage } from './fazer.page';

const routes: Routes = [
  {
    path: '',
    component: FazerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FazerPageRoutingModule {}
