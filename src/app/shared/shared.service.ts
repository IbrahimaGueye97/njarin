import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor(private readonly router: Router) { }

  private readonly currentPageSubject = new BehaviorSubject<string>('home');
  currentPage = this.currentPageSubject.asObservable();

  private readonly showPopupSubject =
      new BehaviorSubject<{name: string, show: boolean}>({name: '', show: false});

  showPopup$ = this.showPopupSubject.asObservable();


  setCurrentPage(page: string) {
    this.currentPageSubject.next(page);
  }
  setShowPopup(showPopup: {name: string, show: boolean}) {
    console.log("setShowPopup", showPopup.show);
    this.showPopupSubject.next(showPopup);
  }

  getCurrentPage() {
    return this.currentPageSubject.value;
  }

  navigateToService(serviceType: string, option?: string): void {
    console.log("navigateToService", serviceType, option);
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
