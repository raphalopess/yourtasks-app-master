import { Injectable } from '@angular/core';
import { TaskDetailsComponent } from '../home/fazer/task-details/task-details.component';
import { Storage } from '@ionic/storage'

export interface Tarefa {
  id: number;
  titulo: String;
  descricao: String;
  prioridade: String;

}

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private storage: Storage) {
    this.loadData();

  }

  private tarefas: Tarefa[] = [
  ];

  private async loadData() {
    const loadedTarefas = await this.storage.get('tarefas') as Tarefa[];
    this.tarefas.push(...loadedTarefas);

  }

  private storageData() {
    this.storage.set('tarefas', this.tarefas);
  }
  public empty(): Tarefa {
    return {
      id: null,
      titulo: '',
      descricao: '',
      prioridade: ''
    };
  }

  public allTaks(): Readonly<Array<Readonly<Tarefa>>> {
    return this.tarefas;
  }

  public find(id: number): Tarefa {
    return { ...this.tarefas.find(t => t.id === id) };
  }

  public update(updateTarefa: Tarefa): void {
    const tarefaIndex = this.tarefas.findIndex(t => t.id === updateTarefa.id);
    this.tarefas[tarefaIndex] = updateTarefa;
    this.storageData();
  }

  public remove(removetarefa: Tarefa) {
    const tarefaIndex = this.tarefas.findIndex(t => t.id === removetarefa.id);
    this.tarefas.splice(tarefaIndex, 1);
    this.storage.set('tarefas', this.tarefas)
  }

  public create(novaTarefa: Tarefa) {
    const maxId = Math.max(...this.tarefas.map(t => t.id));
    this.tarefas.push({ ...novaTarefa, id: maxId });
    this.storageData();
  }

  modalController: any;

  async showDetails(Tarefa: Tarefa) {
    const modal = await this.modalController.create({
      component: TaskDetailsComponent,
      componentProps: {
        Tarefa
      }

    });

    await modal.present();

  }

}
