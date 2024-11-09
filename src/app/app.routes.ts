import { Routes } from '@angular/router';
import { RelatoriosComponent } from './pages/relatorios/relatorios.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastrarUsuarioComponent } from './auth/cadastrar-usuario/cadastrar-usuario.component';
import { CadastroComponent } from './auth/cadastro/cadastro.component';

export const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'relatorios', component: RelatoriosComponent },
  { path: 'auth/cadastro', component: CadastroComponent },
  { path: 'auth/cadastrar-usuario', component: CadastrarUsuarioComponent },
];
