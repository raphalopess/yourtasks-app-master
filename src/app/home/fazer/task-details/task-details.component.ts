import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Tarefa } from '../fazer.page'

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {

  @Input() Tarefa: Tarefa

  constructor(private modalController: ModalController) { }

  ngOnInit() { }

  public close() {
    this.modalController.dismiss();

  }

}
