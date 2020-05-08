import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  @Input() showInscprition : boolean;

  user : User = {
    //Core
    id: null,
    mail : null,
    username: null,
    password: null,
    //

    firsName : null,
    lastName : null,
    birthday : null,
    age : null,
    city : null,
    
    userType : null
  };
    password2: string;


  constructor() { }

  ngOnInit() {
  }

  onSubmitInscription(){
    //Fonction pour enregistrer les données en BDD
    console.log(this.user)
  }


}
