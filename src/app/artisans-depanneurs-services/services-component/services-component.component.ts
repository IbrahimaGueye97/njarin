import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';
import {SharedService} from '../../shared/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-services-component',
  imports: [
    NgIf
  ],
  templateUrl: './services-component.component.html',
  styleUrl: '../../home/home-component/home-component.component.css',
})
export class ServicesComponentComponent implements OnInit {

  constructor(private readonly sharedService: SharedService,
              private readonly routes: Router) {
  }
  currentPage: string = '';

  ngOnInit(): void {
    this.sharedService.currentPage.subscribe(page => {
      this.currentPage = page;
    })
  }

  showHomepage() {
    this.sharedService.setCurrentPage('home');
    this.routes.navigate(['']).then();
  }
}
