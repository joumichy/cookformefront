import { Component, OnInit } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  titre = 'Cook 4 me';
  goToInscription = "Inscription";

  
  //Variable d'affichage.
  showInscriptionBoolean : boolean = false;
  showConnexionBoolean : boolean = true;

  constructor() { }

  ngOnInit() {
    console.log("Holla");
  }

  onClickShowInscription(){

    

    this.showInscriptionBoolean =  !this.showInscriptionBoolean;
    this.showConnexionBoolean = !this.showConnexionBoolean;

    if (this.showInscriptionBoolean == false){

      this.goToInscription = "Inscription";
    }
    else{

      this.goToInscription = "Retour";

    } 

    console.log("booleen :" + this.showInscriptionBoolean);
  }
}
