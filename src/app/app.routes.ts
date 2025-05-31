import { Routes } from '@angular/router';
import {LoginComponentComponent} from './auth/login-component/login-component.component';
import {HomeComponentComponent} from './home/home-component/home-component.component';
import {RegisterComponentComponent} from './auth/register-component/register-component.component';
import {
  ServicesComponentComponent
} from './artisans-depanneurs-services/services-component/services-component.component';
import {PrestataireComponentComponent} from "./auth/prespataire-component/prestataire-component.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponentComponent
  },

  {
    path: 'login',
    component: LoginComponentComponent
  },

  {
    path: 'register',
    component: RegisterComponentComponent
  },

  {
    path: 'services',
    component: ServicesComponentComponent
  },
  {
    path: 'prestataire',
    component: PrestataireComponentComponent
  },
  {
    path: '**',
    component: HomeComponentComponent
  }
];
