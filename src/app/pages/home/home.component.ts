import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AbrirModalComponent } from "./abrir-modal/abrir-modal.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, AbrirModalComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
