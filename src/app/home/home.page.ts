import { Component } from '@angular/core';

interface Tarefa {
  titulo: String;
  descricao: String;
  prioridade: String;

}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor() { }

}
