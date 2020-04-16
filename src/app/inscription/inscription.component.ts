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
    city : null  
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmitInscription(){
    console.log(this.user)
  }
  onClickRetour(){
    this.showInscprition = false;
  }



}
