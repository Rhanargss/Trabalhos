import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { SobrenosComponent } from './pages/sobrenos/sobrenos.component';
import { ProdutoComponent } from './pages/produto/produto.component';
import { ContatoComponent } from './pages/contato/contato.component';

import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '',redirectTo: 'home', pathMatch: 'full' },

  {path: 'sobrenos', component: SobrenosComponent },

  {path: 'produto', component: ProdutoComponent },

  {path: 'contato', component: ContatoComponent },

]

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
