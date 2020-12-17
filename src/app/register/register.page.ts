import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  username: string;
  password: string;

  key: string = "username";
  otherKey: string = "password";
  navCtrl: any;

  constructor(
    private router: Router,
    private registerService: RegisterService,
  ) { }

  ngOnInit() { }

  save() {
    this.registerService.save(this.key, this.username);

    this.registerService.save(this.otherKey, this.password);
    alert("Usuário criado com sucesso!")
    this.navCtrl.back();
  }

  load() {
    this.registerService.get(this.key, this.otherKey);
  }

  goBack() {
    this.router.navigate(['login'])
  }
}
