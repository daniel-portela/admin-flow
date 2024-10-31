import { Routes } from '@angular/router';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'usuarios-cadastrar', component: CadastroComponent },
];