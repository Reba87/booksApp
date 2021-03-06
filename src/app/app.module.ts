import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { RefPipe } from './pipe/ref.pipe';
import { RegistrolibroComponent } from './pages/registrolibro/registrolibro.component';
import { ToArrayPipe } from './pipe/to-array.pipe';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CardsComponent } from '../app/component/cards/cards.component'

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
    LibrosComponent,
    RefPipe,
    RegistrolibroComponent,
    ToArrayPipe,
    LoginComponent,
    CardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
