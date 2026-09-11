import { Routes } from '@angular/router';
import { MomentosComponent } from './pages/momentos/momentos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CompartilharComponent } from './pages/compartilhar/compartilhar.component';

export const routes: Routes = [
  { path: '', redirectTo: '/momentos', pathMatch: 'full' },
  { path: 'momentos', component: MomentosComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'compartilhar', component: CompartilharComponent },
];
