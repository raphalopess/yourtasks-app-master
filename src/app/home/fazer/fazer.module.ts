import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FazerPageRoutingModule } from './fazer-routing.module';

import { FazerPage } from './fazer.page';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FazerPageRoutingModule
  ],
  declarations: [FazerPage, TaskDetailsComponent]
})
export class FazerPageModule { }
