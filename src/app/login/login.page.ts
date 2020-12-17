import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: String

  key: string = "username";
  otherKey: string = "password";

  constructor(
    private router: Router,
    private registerService: RegisterService,
  ) {}

  ngOnInit() {}

  async goLogin() {
    var login = await this.registerService.get(this.key, this.otherKey);

    if (this.username === login.currentUser && this.password === login.currentPassword) {
      this.router.navigate(['home'])
    }
    else {
      alert("Este usuário não existe!")
    }
  }

  goRegister(){
    this.router.navigate(['register'])
  }
}
