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
        this.sharedService.showPopup$.subscribe(showPopup => {
            this.showPopup = showPopup;
        });

    }

    showServicePage(serviceType: string, option: string): void {
        this.showPopup.show = !this.showPopup.show;
        this.sharedService.navigateToService(serviceType, option);
    }

    closePopup() {
        this.showPopup.show = !this.showPopup.show;
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

     prestataireOptions = [
        {
            icon: '🏢',
            title: 'Entreprise',
            description: 'Sociétés et structures professionnelles diverses'
        },
        {
            icon: '🍽️',
            title: 'Restaurant',
            description: 'Endroits pour manger sur place ou à emporter'
        },
        {
            icon: '🛠️',
            title: 'Ouvrier',
            description: 'Travailleurs manuels pour divers travaux'
        },
        {
            icon: '🔧',
            title: 'Technicien qualifié',
            description: 'Professionnels techniques pour réparations et installations'
        },
        {
            icon: '🏨',
            title: 'Hôtel',
            description: 'Établissements pour l’hébergement temporaire'
        },
        {
            icon: '🏠',
            title: 'Agence immobilière',
            description: 'Vente et location de biens immobiliers'
        },
        {
            icon: '🚕',
            title: 'Taxi',
            description: 'Services de transport individuel'
        },
        {
            icon: '🧑‍💼',
            title: 'Agence de recrutement',
            description: 'Mise en relation entre employeurs et candidats'
        },
        {
            icon: '🎨',
            title: 'Artisan',
            description: 'Créateurs et réparateurs manuels de divers objets'
        },
        {
            icon: '🏥',
            title: 'Clinique',
            description: 'Centres de soins médicaux et consultations'
        },
        {
            icon: '🛍️',
            title: 'Centre commercial',
            description: 'Espaces regroupant plusieurs boutiques et services'
        },
        {
            icon: '🏟️',
            title: 'Stade',
            description: 'Infrastructures pour événements sportifs et culturels'
        },
        {
            icon: '🏫',
            title: 'École',
            description: 'Établissements d’enseignement pour enfants et adolescents'
        },
        {
            icon: '🎓',
            title: 'Université',
            description: 'Enseignement supérieur et recherche'
        },
        {
            icon: '📚',
            title: 'Librairie',
            description: 'Vente de livres, fournitures et matériel scolaire'
        },
        {
            icon: '🏦',
            title: 'Banque',
            description: 'Services financiers et gestion de comptes'
        },
        {
            icon: '⛽',
            title: 'Station-service',
            description: 'Carburant, entretien et services pour véhicules'
        },
        {
            icon: '💇‍♂️',
            title: 'Salon de coiffure',
            description: 'Services de coiffure et soins capillaires'
        },
        {
            icon: '📦',
            title: 'Service de livraison',
            description: 'Transport et distribution de colis et marchandises'
        }
    ];



}
