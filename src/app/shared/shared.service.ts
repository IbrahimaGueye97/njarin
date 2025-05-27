import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {


  constructor() { }

  private readonly currentPageSubject = new BehaviorSubject<string>('home');
  currentPage = this.currentPageSubject.asObservable();

  setPage(page: string) {
    this.currentPageSubject.next(page);
  }

  getCurrentPage() {
    return this.currentPageSubject.value;
  }
}
