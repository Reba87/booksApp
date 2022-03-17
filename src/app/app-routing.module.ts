import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ResgistroComponent} from './pages/resgistro/resgistro.component';
import {UsuariosComponent} from './pages/usuarios/usuarios.component';


const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'registro', component:ResgistroComponent},
  {path: 'usuarios', component:UsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
