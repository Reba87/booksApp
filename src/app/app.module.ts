import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ResgistroComponent } from './pages/resgistro/resgistro.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { AboutComponent } from './pages/about/about.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { LibrosComponent } from './pages/libros/libros.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ResgistroComponent,
    UsuariosComponent,
    AboutComponent,
    FormularioRegistroComponent,
    LibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
