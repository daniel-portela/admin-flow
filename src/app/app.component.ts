import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./lib/components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./lib/components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gerenciar-users';
}
