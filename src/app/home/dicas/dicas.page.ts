import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-dicas',
  templateUrl: './dicas.page.html',
  styleUrls: ['./dicas.page.scss'],
})

export class DicasPage {

  constructor() {
    this.renderDicas()
  }

  async renderDicas() {
    const { data } = await axios.get('https://aps-api.gateway.linkapi.com.br/v1/dicas');
    const { dicas } = data;

    let items = '';
    for (const dica of dicas) {
      items = items.concat(
        `<ion-item>
          <ion-label>
            <h2><b>${dica.id}°</b></h2>
            <h3>${dica.title}</h3>
            <p>${dica.description}</p>
          </ion-label>
        </ion-item>`
      )
    }

    document.getElementById("list").innerHTML = items;
  }

  async funcButton() {
    const { data: data } = await axios.get('https://aps-api.gateway.linkapi.com.br/v1/frases');
    const phrases = data.frases;

    const arr = [
      ...phrases
    ];

    const index = Math.floor(Math.random() * 11);

    document.getElementById("frase").innerText = arr[index]
  }

}
