import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

export interface Address {
  street?: string;
  city?: string;
  postalCode?: string;
  country?: string;
}

export enum Roles {
  USER = 'USER',
  OWNER = 'OWNER',
  ARTISAN = 'ARTISAN',
  COMPANY = 'COMPANY'
}

export interface RegisterData {
  lastName: string;
  firstName: string;
  userName: string;
  email: string;
  telephone: string;
  address: Address;
  role: string;
  code?: string;
  acceptTerms: boolean;
  acceptNewsletter: boolean;
}

@Component({
  selector: 'app-register-component',
  imports: [
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './register-component.component.html',
  styleUrl: './register-component.component.css'
})


export class RegisterComponentComponent implements OnInit, OnDestroy {

  constructor(private readonly router: Router) {
  }

    ngOnInit() {
      this.scrollToTop();
    }

    ngOnDestroy() {
      this.scrollToTop();
    }

    private scrollToTop() {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }

  registerData: RegisterData = {
    lastName: '',
    firstName: '',
    userName: '',
    email: '',
    telephone: '',
    address: {
      street: '',
      city: '',
      postalCode: '',
      country: ''
    },
    role: '',
    code: '',
    acceptTerms: false,
    acceptNewsletter: false
  };

  roles: Roles[] = [
    Roles.USER,
    Roles.OWNER,
    Roles.ARTISAN,
    Roles.COMPANY,
  ];

  onSubmit() {
    if (this.registerData.acceptTerms) {
      console.log('Données d\'inscription:', this.registerData);
      // Logique d'inscription ici
    }
  }

  openPrivacy(event: Event) {
    event.preventDefault();
    console.log('Ouvrir la politique de confidentialité');
    // Ouvrir modal ou naviguer vers la politique
  }

  goToLogin(event: Event) {
    event.preventDefault();
    setTimeout(() => {
      this.scrollToTop();
    }, 0)
    this.router.navigate(['/login']).then(() => {});
  }

  openTerms(event: Event) {
    event.preventDefault();
    console.log('Ouvrir les conditions d\'utilisation');
    // Ouvrir modal ou naviguer vers les CGU
  }

}
