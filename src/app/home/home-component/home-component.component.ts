import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  ServicesComponentComponent
} from '../../artisans-depanneurs-services/services-component/services-component.component';
import {SharedService} from '../../shared/shared.service';

export enum Artisans {
  ELECTRICITES = 'Électriciens certifiés',
  PLOMBERIES = 'Plombiers d\'urgence',
  MENUISERIES = 'Menuisiers & charpentiers',
  MECANIQUES = 'Mécaniciens auto/moto',
  SECUTITES = 'Serruriers 24h/24',
  JARDINAGE = 'Jardiniers & paysagistes',
  AUTRE = 'Couvreurs & étanchéité'
}

export enum Transports {
  LOCATION = 'Location de voitures',
  TAXI = 'Service de taxi/VTC',
  ACHAT = 'Achat/vente de véhicules',
  PIECES = 'Pièces détachées auto',
  CAMIONLOC = 'Location camionnettes',
  COVOITURAGE = 'Covoiturage',
  LIVRAISON = 'Livraison express',
  TRANSPORTMARCANDIS = 'Transport de marchandises'
}

export enum Immobilier {
  LOCATION = 'Location maisons/appartements',
  CHAMBRE = 'Chambres',
  HOTEL = 'Hôtels & hébergements',
  TERRAIN = 'Terrains à vendre',
  BUREAU = 'Bureaux commerciaux',
  COLOCATION = 'Colocation',
  GESTIONLOCATIVE = 'Gestion locative',
  ESTIMATION = 'Estimation immobilière'
}

export enum ServiceDomicle {
  NETTOYAGE = 'Ménage & nettoyage',
  COURSPARTICULIER = 'Cours particuliers',
  GARDE = 'Garde d\'enfants',
  SOINS = 'Soins esthétiques',
  MASSAGE = 'Massage & bien-être',
  LIVRAISON = 'Livraison de repas',
  INFORMATIQUE = 'Assistance informatique',
  PETSETTING = 'Pet-sitting'
}

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent implements OnInit {

  currentPage: string = 'home';

  artisans: Artisans[] = [
    Artisans.ELECTRICITES,
    Artisans.PLOMBERIES,
    Artisans.MENUISERIES,
    Artisans.MECANIQUES,
    Artisans.SECUTITES,
    Artisans.JARDINAGE,
    Artisans.AUTRE,
  ];

  vehicles: Transports[] = [
    Transports.LOCATION,
    Transports.TAXI,
    Transports.ACHAT,
    Transports.PIECES,
    Transports.CAMIONLOC,
    Transports.COVOITURAGE,
    Transports.LIVRAISON,
    Transports.TRANSPORTMARCANDIS,
  ];

  immobiliers: Immobilier[] = [
    Immobilier.LOCATION,
    Immobilier.CHAMBRE,
    Immobilier.HOTEL,
    Immobilier.TERRAIN,
    Immobilier.BUREAU,
    Immobilier.COLOCATION,
    Immobilier.GESTIONLOCATIVE,
    Immobilier.ESTIMATION,
  ];

  serviceDomicile: ServiceDomicle[] = [
    ServiceDomicle.NETTOYAGE,
    ServiceDomicle.COURSPARTICULIER,
    ServiceDomicle.GARDE,
    ServiceDomicle.SOINS,
    ServiceDomicle.MASSAGE,
    ServiceDomicle.LIVRAISON,
    ServiceDomicle.INFORMATIQUE,
    ServiceDomicle.PETSETTING,
  ]

  constructor(private readonly router: Router,
              private readonly sharedService: SharedService,) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit(): void {
    // Attendre que le DOM soit complètement chargé
    this.initScrollEffects();

    // setTimeout(() => {

      this.initAnimations();
      this.initCounters();

    // }, 300);

  }


  register(): void {
    console.log("Redirect to register");
    this.router.navigate(['/register']).then(() => {});
  }

  scrollToServices(): void {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  showServicePage(serviceType: string): void {
    this.currentPage = serviceType;
    this.sharedService.setPage(serviceType);
    console.log(`Naviguer vers la page de service: ${serviceType}`);
    this.router.navigate(['/services']).then(() => {});
  }

  showHomepage(): void {
    this.currentPage = 'home';
  }

  private initAnimations(): void {
    try {
      // Vérifier que les éléments existent avant d'animer
      const heroTitle = document.querySelector('.hero h1');
      const heroText = document.querySelector('.hero p');
      const heroCta = document.querySelector('.hero-cta');

      if (heroTitle && heroText && heroCta) {
        // Animation du hero avec timeline
        const heroTl = gsap.timeline();
        heroTl
          .fromTo(heroTitle,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
          )
          .fromTo(heroText,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
            '-=0.6'
          )
          .fromTo(heroCta,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
            '-=0.6'
          );
      }

      // Animation des cartes de service avec ScrollTrigger
      const cards = document.querySelectorAll('.service-card');
      if (cards.length > 0) {
        cards.forEach((card, index) => {
          gsap.set(card, { opacity: 0, y: 80, scale: 0.8 });
          ScrollTrigger.create({
            trigger: card,
            start: 'top 85%',
            onEnter: () => {
              gsap.to(card, {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'back.out(1.2)'
              });
            }
          });
        });
      }

      // Animation de la section frequency
      const frequencyItems = document.querySelectorAll('.frequency-list li');
      if (frequencyItems.length > 0) {
        gsap.set(frequencyItems, { opacity: 0, scale: 0.5 });
        ScrollTrigger.create({
          trigger: '.frequency',
          start: 'top 80%',
          onEnter: () => {
            gsap.to(frequencyItems, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: 'back.out(1.4)'
            });
          }
        });
      }

      console.log("Animations initialisées");
    } catch (error) {
      console.error("Erreur lors de l'initialisation des animations:", error);
    }
  }

  private initScrollEffects(): void {
    try {
      // Header transparent au scroll (si l'élément existe)
      const header = document.querySelector('.header');
      if (header) {
        ScrollTrigger.create({
          start: 'top -100',
          end: 99999,
          toggleClass: {className: 'scrolled', targets: '.header'}
        });
      }

      // Effet parallaxe sur le hero
      const hero = document.querySelector('.hero');
      if (hero) {
        gsap.to(hero, {
          yPercent: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: hero,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }

      // Animation des stats au scroll
      const statItems = document.querySelectorAll('.stat-item');
      if (statItems.length > 0) {
        statItems.forEach((item, index) => {
          gsap.set(item, { opacity: 0, y: 50 });

          ScrollTrigger.create({
            trigger: item,
            start: 'top 80%',
            onEnter: () => {
              gsap.to(item, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.2,
                ease: 'power3.out'
              });
            }
          });
        });
      }

      console.log("Effets de scroll initialisés");
    } catch (error) {
      console.error("Erreur lors de l'initialisation des effets de scroll:", error);
    }
  }

  private initCounters(): void {
    try {
      // Animation des compteurs avec intersection observer
      const counters = document.querySelectorAll('.counter');
      console.log('Counters trouvés:', counters.length);

      if (counters.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
              entry.target.classList.add('counted');
              this.animateCounter(entry.target as HTMLElement);
            }
          });
        }, { threshold: 0.5 });

        counters.forEach(counter => {
          counterObserver.observe(counter);
        });
      }

      console.log("Compteurs initialisés");
    } catch (error) {
      console.error("Erreur lors de l'initialisation des compteurs:", error);
    }
  }

  private animateCounter(counter: HTMLElement): void {
    try {
      console.log("Animation du compteur:", counter);
      const target = parseInt(counter.getAttribute('data-count') ?? '0', 10);
      console.log('Target =', target);

      if (target > 0) {
        const duration = 2000;
        const startTime = Date.now();

        const updateCounter = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Fonction d'easing
          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const current = Math.floor(target * easeOutQuart);

          counter.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        };

        updateCounter();
      }
    } catch (error) {
      console.error("Erreur lors de l'animation du compteur:", error);
    }
  }

}
