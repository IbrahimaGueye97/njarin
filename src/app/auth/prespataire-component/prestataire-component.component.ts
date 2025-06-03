import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {SharedService} from "../../shared/shared.service";
import {FormsModule} from "@angular/forms";

export interface PrestataireDate {
    name: string;
    type: string;
    description: string;
    numberEmployer: string;
    acceptTerms: boolean;
}

@Component({
  selector: 'app-prestataire-component',
    imports: [
        NgIf,
        NgForOf,
        FormsModule,
    ],
  templateUrl: './prestataire-component.component.html',
  styleUrl: './prestataire-component.component.css'
})
export class PrestataireComponentComponent implements OnInit {


    constructor(private readonly router: Router,
                protected readonly sharedService: SharedService,) {
    }

    showPopup = {name: '', show: false};


    ngOnInit() {
        this.sharedService.sowType.valueOf()
        this.sharedService.types.valueOf()
    }
    showPopupPres = {name: '', show: true};
    prestataireData: PrestataireDate = {
        name: '',
        type: '',
        description: '',
        numberEmployer: '',
        acceptTerms: false,
    };


    closePopupPrestation() {
        console.log('closePopupPrestation ', this.showPopup.show);
        this.showPopupPres.show = !this.showPopupPres.show;
        this.sharedService.togglePopup();
        this.router.navigate(['/']).then(() => {});
    }

    saveInfoPrestataire() {
        if (this.prestataireData.acceptTerms) {
            console.log(this.prestataireData.acceptTerms);
        }
        this.router.navigate(['/register']).then(() => {})
    }

    openTerms(event: Event) {
        event.preventDefault()
        console.log('Ouvrir les conditions d\'utilisation');
    }

    openPrivacy($event: Event) {
        $event.preventDefault();
        console.log('Ouvrir la politique de confidentialité');
    }
}
