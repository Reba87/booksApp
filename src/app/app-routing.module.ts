import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {ResgistroComponent} from './pages/resgistro/resgistro.component';
import {UsuariosComponent} from './pages/usuarios/usuarios.component';
import {LibrosComponent} from './pages/libros/libros.component';
import {RegistrolibroComponent} from './pages/registrolibro/registrolibro.component'
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'registro', component:ResgistroComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'libros', component:LibrosComponent},
  {path: 'registro-libros', component:RegistrolibroComponent},
  {path: 'Login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
