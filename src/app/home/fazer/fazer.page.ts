import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TaskService } from 'src/app/services/task.service';
import { TaskDetailsComponent } from './task-details/task-details.component';

export interface Tarefa {
  titulo: String;
  descricao: String;
  prioridade: String;

}
@Component({
  selector: 'app-fazer',
  templateUrl: './fazer.page.html',
  styleUrls: ['./fazer.page.scss'],
})

export class FazerPage implements OnInit {

  public tarefas = this.TaskService.allTaks();

  constructor(private modalController: ModalController, private TaskService: TaskService) { }

  async showDetails(Tarefa: Tarefa) {
    const modal = await this.modalController.create({
      component: TaskDetailsComponent,
      componentProps: {
        Tarefa
      }
    });

    await modal.present();

  }

  ngOnInit() {
  }

}
