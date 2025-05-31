import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {SharedService} from "../../shared/shared.service";

@Component({
  selector: 'app-popup-service',
    imports: [
        NgForOf,
        NgIf,
        NgSwitchCase,
        NgSwitch
    ],
  templateUrl: './popup-service.component.html',
  styleUrl: './popup-service.component.css'
})
export class PopupServiceComponent implements OnInit {
    constructor(private readonly sharedService: SharedService) {
    }
    showPopup = {name: '', show: true};

    ngOnInit() {
        console.log("showPopup init", this.showPopup);
        this.sharedService.showPopup$.subscribe(showPopup => {
            this.showPopup = showPopup;
        });

    }

    showServicePage(serviceType: string, option: string): void {
        this.sharedService.navigateToService(serviceType, option);
    }

    closePopup() {
        this.showPopup.show = false;
    }


    immobilierOptions = [
        {
            icon: '🏠', // Icône plus standard pour les maisons
            title: 'Maisons',
            description: 'Trouvez des maisons à acheter ou louer',
            show: false
        },
        {
            icon: '🏢', // Icône d'immeuble pour appartements
            title: 'Appartements',
            description: 'Appartements en location ou à vendre'
        },
        {
            icon: '🛌', // Icône de lit pour chambres
            title: 'Chambres',
            description: 'Chambres à louer pour étudiants ou jeunes actifs'
        },
        {
            icon: '🏩', // Icône d'hôtel plus élégante
            title: 'Hôtels',
            description: 'Réservation d\'hôtels et locations mensuelles'
        },
        {
            icon: '🗾', // Icône de terrain avec montagnes
            title: 'Terrains',
            description: 'Terrains constructibles à vendre'
        },
        {
            icon: '👵', // Icône pour résidences séniors
            title: 'Résidences',
            description: 'Résidences services et séniors'
        },
        {
            icon: '👥', // Icône de personnes pour colocation
            title: 'Colocations',
            description: 'Trouver un colocataire'
        },
        {
            icon: '📊', // Icône de graphique pour gestion
            title: 'Gestion locative',
            description: 'Trouver un gestionnaire locatif'
        },
        {
            icon: '💰', // Icône d'argent pour estimation
            title: 'Estimation',
            description: 'Estimation des propriétés à vendre'
        }
    ];
    transportOptions = [
        {
            icon: '<UNK>',
            title: 'Taxi',
            description: 'Trouver un taxi',
        },
        {
            icon: '<UNK>',
            title: 'Livraison',
            description: 'Livraison express',
        },
        {
            icon: '<UNK>',
            title: 'Location',
            description: 'Trouver une voiture a louer une voiture',
        },
        {
            icon: '<UNK>',
            title: 'Achat',
            description: 'Achat/vente de véhicules',
        },
        {
            icon: '<UNK>',
            title: 'Pieces',
            description: 'Pièces détachées auto et moto',
        },
        {
            icon: '<UNK>',
            title: 'Camion',
            description: 'Location camionnette',
        },
        {
            icon: '<UNK>',
            title: "Covoiturage",
            description: 'Covoiturage'
        },
        {
            icon: '<UNK>',
            title: 'Transport marchandise',
            description: 'Transport de marchandises'
        }
    ];

    artisanOptions = [
        {
            icon: '<UNK>',
            title: 'Unknown',
            description: 'Unknown',
        },
        {
            icon: '<^^>',
            title: 'Unknown',
            description: 'Unknown',
        }

    ];

    prestataire = [
        'Entreprise',
        'Restaurant',
        'Ouvrier',
        'Technicien califier',
        'Hotel',
        'Agence Immobiliere',
        'Taxi',
        'Agence de recrutement',
        'Artisan'
    ]


}
