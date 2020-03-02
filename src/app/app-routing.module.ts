import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Componentes Pagina
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShipComponent } from './pages/ship/ship.component';
import { ShipsComponent } from './pages/ships/ships.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ship/:id', component: ShipComponent },
  { path: 'ships', component: ShipsComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'ships' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
