import {Component, OnDestroy, OnInit} from '@angular/core';
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

export class LoginComponentComponent implements OnInit, OnDestroy {

  loginData = {
    identifier: '',
    password: ''
  };

  constructor(private readonly router: Router) {}

  ngOnInit() {
    // Réinitialise la position de scroll au chargement du composant
    this.scrollToTop();
  }

  ngOnDestroy() {
    // Optionnel : réinitialise aussi lors de la destruction du composant
    this.scrollToTop();
  }

  private scrollToTop() {
    // Méthode 1: Scroll immédiat
    window.scrollTo(0, 0);

    // Méthode 2: Scroll avec animation (optionnel)
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    // Méthode 3: Réinitialise aussi le scroll de document
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  onSubmit() {
    if (this.isValidForm()) {
      // Logique de connexion
      console.log('Données de connexion:', this.loginData);
      // Après connexion réussie, rediriger vers la page d'accueil
      this.router.navigate(['/home']).then(() => {});
    }
  }

  onForgotPassword(event: Event) {
    event.preventDefault();
    // Réinitialise le scroll avant de naviguer
    this.scrollToTop();
    this.router.navigate(['/forgot-password']).then(() => {});
  }

  onCreateAccount(event: Event) {
    event.preventDefault();
    // Réinitialise le scroll avant de naviguer
    this.scrollToTop();
    // Utilise setTimeout pour s'assurer que le scroll se fait après le changement de route
    setTimeout(() => {
      this.scrollToTop();
    }, 0);
    this.router.navigate(['/register']).then();
  }

  private isValidForm(): boolean {
    return this.loginData.identifier.trim() !== '' &&
        this.loginData.password.trim() !== '';
  }
}

