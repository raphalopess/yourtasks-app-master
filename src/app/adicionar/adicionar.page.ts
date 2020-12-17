import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Tarefa, TaskService } from '../services/task.service';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.page.html',
  styleUrls: ['./adicionar.page.scss'],
})
export class AdicionarPage implements OnInit {

  public tarefa: Tarefa;


  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private navCtrl: NavController,


  ) { }

  ngOnInit() {
    this.tarefa = this.taskService.empty();
  }

  adicionar() {
    this.taskService.create(this.tarefa)
    this.navCtrl.back();
  }

}
