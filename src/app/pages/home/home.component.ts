import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from './login-modal/login-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LoginModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
