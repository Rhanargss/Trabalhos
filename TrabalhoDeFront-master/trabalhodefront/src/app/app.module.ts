import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobrenosComponent,
    ProdutoComponent,
    ContatoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
