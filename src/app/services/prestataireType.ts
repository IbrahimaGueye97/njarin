import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class PrestataireType {

     Entreprise = [
         {
             icon: '🏗️',
             title: 'Bâtiment et Travaux Publics (BTP)',
             description: ''

         },
         {
             icon: '🌾',
             title: 'Agriculture et Agroalimentaire',
             description: ''

         },
         {
             icon: '🏪',
             title: 'Commerce et Distribution',
             description: ''
         },
         {
             icon: '🚕',
             title: 'Transport et Logistique',
             description: ''
         },
         {
             icon: '🧑‍🏫',
             title: 'Éducation et formation',
             description: '',
         },
         {
             icon: '💻',
             title: 'Technologies et communication',
             description: ''
         },
         {
             icon: '🎤',
             title: 'Événementiel et loisirs',
             description: ''
         }

         // '🧰 Services et artisanat',
         // '🏥 Santé et services sociaux',
         // '🏦 Banques, assurances et services financiers',
         // '🏠 Immobilier',
    ]

    Technicien = [
        {
            icon: '🔌',
            title: 'Électricien',
            description: 'Installation et réparation de systèmes électriques'
        },
        {
            icon: '💧',
            title: 'Plombier',
            description: 'Réparation et installation de plomberie sanitaire'
        },
        {
            icon: '🧰',
            title: 'Technicien en maintenance',
            description: 'Entretien et réparation de machines et équipements'
        },
        {
            icon: '💻',
            title: 'Informaticien',
            description: 'Assistance technique et maintenance informatique'
        },
        {
            icon: '📡',
            title: 'Technicien réseau',
            description: 'Installation de réseaux Internet et TV'
        },
        {
            icon: '🌬️',
            title: 'Frigoriste / Climatisation',
            description: 'Installation et réparation de climatiseurs et réfrigérateurs'
        },
        {
            icon: '🔧',
            title: 'Technicien en électronique',
            description: 'Réparation de téléviseurs, radios, etc.'
        },
        {
            icon: '🔍',
            title: 'Technicien de sécurité',
            description: 'Installation de caméras de surveillance et systèmes d’alarme'
        }
    ];


    Hotel = [
        {
            icon: '⭐',
            title: 'Hôtel 1 étoile',
            description: 'Établissement simple avec services de base'
        },
        {
            icon: '⭐⭐',
            title: 'Hôtel 2 étoiles',
            description: 'Confort basique avec quelques commodités standards'
        },
        {
            icon: '⭐⭐⭐',
            title: 'Hôtel 3 étoiles',
            description: 'Confort supérieur avec services variés'
        },
        {
            icon: '⭐⭐⭐⭐',
            title: 'Hôtel 4 étoiles',
            description: 'Établissement haut de gamme avec prestations avancées'
        },
        {
            icon: '⭐⭐⭐⭐⭐',
            title: 'Hôtel 5 étoiles',
            description: 'Luxe, prestations premium et services exceptionnels'
        }
    ];

    Ecoles = [
        {
            icon: '🏫',
            title: 'Écoles primaires',
            description: 'Institutions pour l’éducation de base des enfants'
        },
        {
            icon: '🏫',
            title: 'Collèges',
            description: 'Établissements d’enseignement secondaire premier cycle'
        },
        {
            icon: '🏫',
            title: 'Lycées',
            description: 'Enseignement secondaire supérieur général ou technique'
        },

        {
            icon: '🏫',
            title: 'Écoles privées',
            description: 'Établissements scolaires privés à différents niveaux'
        },

        {
            icon: '🧪',
            title: 'Écoles scientifiques',
            description: 'Établissements spécialisés dans les filières scientifiques'
        },
        {
            icon: '🎨',
            title: 'Écoles d’art',
            description: 'Instituts pour la formation artistique et créative'
        },
        {
            icon: '🏫',
            title: 'Darra / Écoles coraniques',
            description: 'Écoles islamiques pour l’enseignement religieux'
        }
    ];

    Universite = [

        {
            icon: '🎓',
            title: 'Universités',
            description: 'Établissements d’enseignement supérieur public ou privé'
        },
        {
            icon: '💻',
            title: 'Écoles de formation professionnelle',
            description: 'Centres spécialisés pour l’apprentissage de métiers pratiques'
        },
    ]


}