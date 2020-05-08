import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { MarketComponent } from './market/market.component';
import { EtatCommandeComponent } from './etat-commande/etat-commande.component';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { ParametreComponent } from './parametre/parametre.component';

const routes : Routes = [
  {path: 'menu', component: MenuComponent},
  {path: 'menu-principal', component: MenuPrincipalComponent},
  {path: 'market', component: MarketComponent},
  {path: 'etat-commande', component: EtatCommandeComponent},
  {path: 'historique-commande', component: HistoriqueCommandeComponent},
  {path: 'parametre', component: ParametreComponent},
  {path: '**', component: AccueilComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
