import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FormsModule } from '@angular/forms';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ParametreComponent } from './parametre/parametre.component';
import { EtatCommandeComponent } from './etat-commande/etat-commande.component';
import { HistoriqueCommandeComponent } from './historique-commande/historique-commande.component';
import { MarketComponent } from './market/market.component';


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
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    ConnexionComponent,
    MenuPrincipalComponent,
    PageNotFoundComponent,
    MenuComponent,
    ParametreComponent,
    EtatCommandeComponent,
    HistoriqueCommandeComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
