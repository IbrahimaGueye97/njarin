import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponentComponent} from './home/header-component/header-component.component';
import {FooterComponentComponent} from './home/footer-component/footer-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponentComponent, FooterComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'njarin';
}
