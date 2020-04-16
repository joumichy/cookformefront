import { Component, OnInit,Input } from '@angular/core';
import { User } from '../user'

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  @Input() showConnexion: Boolean;

  //Donnée Utilisateur
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
    city : null  
  };
  constructor() { }

  ngOnInit() {
  }

}
