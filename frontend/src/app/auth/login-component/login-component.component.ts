import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  constructor(private readonly router: Router,) { }

  loginData = {
    identifier: '',
    password: ''
  };

  onSubmit() {
    if (this.loginData.identifier && this.loginData.password) {
      console.log('Données de connexion:', this.loginData);
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    console.log('Mot de passe oublié cliqué');
    // Navigation vers la page de récupération
  }

  onCreateAccount(event: Event) {
    event.preventDefault();
    this.router.navigate(['/register']).then(() => {});
  }

}
