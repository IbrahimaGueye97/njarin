import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from "@angular/router";
import {PrestataireType} from "../services/prestataireType";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private readonly router: Router,
              private readonly prestataireType: PrestataireType) { }

  private readonly currentPageSubject = new BehaviorSubject<string>('home');
  currentPage = this.currentPageSubject.asObservable();

  private readonly showPopupSubject =
      new BehaviorSubject<{name: string, show: boolean}>({name: '', show: false});

  showPopup$ = this.showPopupSubject.asObservable();

  types: {icon: string, title: string, description: string}[] = [];
  sowType: boolean = false;

  setCurrentPage(page: string) {
    this.currentPageSubject.next(page);
  }
  setShowPopup(showPopup: {name: string, show: boolean}) {
    this.showPopupSubject.next(showPopup);
  }

  getShowPopup() {
    return this.showPopupSubject.getValue();
  }

  togglePopup() {
    const popup = this.getShowPopup();
    this.showPopupSubject.next({
      name: popup.name,
      show: !popup.show
    });
  }


  getCurrentPage() {
    return this.currentPageSubject.value;
  }

  navigateToService(serviceType: string, option?: string): void {
    this.sowType = false;
    this.types = [];
    switch (option) {
      case 'Entreprise':
        this.sowType = true;
        this.types = this.prestataireType.Entreprise
        break;
      case 'Ouvrier':
        this.sowType = true;
        this.types = this.prestataireType.Technicien
        break;
      case 'Technicien qualifié':
          this.sowType = true;
          this.types = this.prestataireType.Technicien ;
          break;
      case 'Hôtel':
        this.sowType = true;
        this.types = this.prestataireType.Hotel ;
        break;
      case 'École':
        this.sowType = true;
        this.types = this.prestataireType.Ecoles ;
        break
      default:
        break;
    }
    if (serviceType === 'home') {
      this.router.navigate(['/']).then();
      return;
    }
    if (serviceType === 'Prestataire') {
      console.log("got prestaitaire");
      this.router.navigate(['/prestataire']).then(() => {});
      return;
    }
    console.log('serviceOption = ', option);
    if (option) {
      console.log('Request select all for options', option);
    }
    this.setCurrentPage(serviceType);
    console.log(`Naviguer vers la page de service: ${serviceType}`);
    this.router.navigate(['/services']).then(()=>{
    });
  }

}
