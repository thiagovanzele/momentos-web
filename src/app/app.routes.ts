import { Routes } from '@angular/router';
import { MomentosComponent } from './pages/momentos/momentos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CompartilharComponent } from './pages/compartilhar/compartilhar.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { EditComponent } from './pages/edit/edit.component';
import { LoginDefaultComponent } from './components/login-default/login-default.component';
import { LoginComponent } from './pages/login/login.component';
import { CadastrarComponent } from './pages/cadastrar/cadastrar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cadastrar', component: CadastrarComponent },
  { path: 'momentos', component: MomentosComponent },
  { path: 'momentos/:id', component: DetalhesComponent },
  { path: 'momentos/editar/:id', component: EditComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'compartilhar', component: CompartilharComponent },
];
