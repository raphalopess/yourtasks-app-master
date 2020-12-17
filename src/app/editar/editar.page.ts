import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Tarefa, TaskService } from '../services/task.service';



@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {

  public tarefa: Tarefa;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private navCtrl: NavController

  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tarefa = this.taskService.find(id);
  }

  save() {
    this.taskService.update(this.tarefa)
    this.navCtrl.back();
  }

  remove() {
    this.taskService.remove(this.tarefa)
    this.navCtrl.back();
  }

}
