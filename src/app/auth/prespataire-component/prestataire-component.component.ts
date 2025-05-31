import { Component } from '@angular/core';
import {NgForOf, NgIf, NgSwitchCase} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-prespataire-component',
    imports: [
        NgForOf,
        NgIf,
        NgSwitchCase
    ],
  templateUrl: './prestataire-component.component.html',
  styleUrl: './prestataire-component.component.css'
})
export class PrestataireComponentComponent {


    constructor(private readonly router: Router,) {
    }
    showPopup = {name: '', show: true};


    closePopup() {
        this.showPopup.show = false;
        this.router.navigate(['/register']).then(() => {});
    }
}
